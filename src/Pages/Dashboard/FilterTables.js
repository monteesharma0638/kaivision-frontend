import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import pancakeswap from "../../Assets/Images/pancakeswap.png";
import uniswap from "../../Assets/Images/uniswap.png";
import dodo from "../../Assets/Images/dodo.png";
import balancer from "../../Assets/Images/Balancer.png";
import curve from "../../Assets/Images/curve.png";
import sushiswap from "../../Assets/Images/sushiswap.png";
import { Link, useParams } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import {
  fetchPriceVariation,
  fetchTopTradePairs,
  getldforpairs,
  getLikeStatusByAccount,
  updatePairAction,
} from "../../allfunction/FetchFunctions";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useAccount, useSignMessage } from "wagmi";
import { Avatar, Badge } from "@material-ui/core";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ReportIcon from "@mui/icons-material/Report";

const columns = [
  {
    id: "name",
    label: "Pair",
  },
  {
    id: "exchange",
    label: "Exchange",
  },
  {
    id: "price",
    label: "Price ",
    align: "left",
  },
  {
    id: "variation",
    label: "24h Price variation",
    align: "left",
  },
  {
    id: "hrvolume",
    label: "24h Volume ",
    align: "left",
  },
  {
    id: "actions",
    label: "Actions",
    align: "right",
  },
];

function createData(name, exchange, price, variation, hrvolume, actions) {
  return {
    name: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          <Avatar
            alt="C"
            width="20px"
            height="20px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
          >
            <AdjustIcon color="inherit" fontSize="small" />
          </Avatar>
        </Box>
        <Box>
          <Box display="flex" alignItems="center" color="#fff" fontSize="14px">
            <Typography variant="body">{name[0]}</Typography>
            <Typography style={{ margin: "0 3px" }} color="#48f00b">
              /
            </Typography>
            <Typography variant="body">{name[1]}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Link to="/">
              <Typography
                variant="body"
                fontSize="13px"
                color="#f0b90b"
                className="addreswidth"
              >
                {name[2]} &nbsp;
              </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: "14px", marginLeft: "5px" }} />
          </Box>
        </Box>
      </Box>
    ),
    exchange: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          <img
            src={
              exchange === "Uniswap v2" || exchange === "Uniswap" || exchange === "Uniswap v3"
                ? uniswap
                : exchange === "Dodo"
                ? dodo
                : exchange === "Balancer"
                ? balancer
                : exchange === "Curve"
                ? curve
                : exchange === "SushiSwap"
                ? sushiswap
                : pancakeswap
            }
            alt=""
            width="20px"
            height="20px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
          />
        </Box>
        <Box color="#fff" fontSize="14px">
          <Typography variant="body">{exchange}</Typography>
        </Box>
      </Box>
    ),
    price: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">${parseFloat(price).toFixed(6)}</Typography>
      </Box>
    ),
    variation: (
      <Box
        color={variation && variation.isPositive !== -1 ? "#48f00b" : "red"}
        fontSize="14px"
      >
        <Typography variant="body">
          {variation ? `${variation.value}%` : "-Not Available-"}
        </Typography>
      </Box>
    ),
    hrvolume: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">
          {parseFloat(hrvolume).toFixed(2)}
        </Typography>
      </Box>
    ),
    actions: (
      <Box>
        <IconButton
          color={
            actions.userLiked && actions.userLiked.liked ? "primary" : "inherit"
          }
          onClick={() =>
            actions.signMessage({
              message: JSON.stringify({
                pairAddress: name[2],
                likedStatus: true,
                dislikedStatus: false,
              }),
            })
          }
        >
          <Badge
            badgeContent={
              actions.likeStatus && actions.likeStatus.liked
                ? actions.likeStatus.liked
                : 0
            }
            color="primary"
          >
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton
          color={
            actions.userLiked && actions.userLiked.disliked
              ? "error"
              : "inherit"
          }
          onClick={() =>
            actions.signMessage({
              message: JSON.stringify({
                pairAddress: name[2],
                likedStatus: false,
                dislikedStatus: true,
              }),
            })
          }
        >
          <Badge
            badgeContent={
              actions.likeStatus && actions.likeStatus.disliked
                ? actions.likeStatus.disliked
                : 0
            }
            color="error"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <ThumbDownIcon />
          </Badge>
        </IconButton>
        <Tooltip title="Shaow Live Data" placement="top-start">
          <Link to={`/pair-explorer/${actions.chain}/${name[2]}`}>
            <WaterfallChartIcon
              sx={{
                color: "#f0b90b",
                cursor: "pointer",
                fontSize: "18px",
              }}
            />
          </Link>
        </Tooltip>
      </Box>
    ),
  };
}

const FilterTables = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const { chain } = useParams();
  const { address } = useAccount();
  const [likeStatus, setLikeStatus] = React.useState({});

  const { signMessage } = useSignMessage({
    onSuccess: async (data, variables) => {
      const result = await updatePairAction(variables.message, data);
      await getLikeStatusByAccount(address).then((result) =>
        setLikeStatus(result)
      );
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    getLikeStatusByAccount(address).then((result) => {
      setLikeStatus(result);
    });
  }, [address]);

  React.useEffect(() => {
    async function fetchIt() {
      setRows([]);
      const data = await fetchTopTradePairs(chain);
      const variationArgs = [];
      data.forEach((value, index) => {
        if (index % 2 === 0) {
          variationArgs.push({
            baseCurrency: value.baseCurrency.address,
            quoteCurrency: data[index + 1].baseCurrency.address,
          });
        }
      });

      const pairArgs = [
        ...new Set(data.map((value) => value.token.address.address)),
      ];
      const pairFetchResult = await getldforpairs(pairArgs);
      const pairResult = {};
      if (pairFetchResult && pairFetchResult.code) {
        pairFetchResult.data.forEach((value) => {
          const liked =
            value.likeStatus[0] && value.likeStatus[0].likedStatus
              ? value.likeStatus[0].count
              : value.likeStatus[1] && value.likeStatus[1].likedStatus
              ? value.likeStatus[1].count
              : 0;
          const disliked =
            value.likeStatus[0] && !value.likeStatus[0].likedStatus
              ? value.likeStatus[0].count
              : value.likeStatus[1] && !value.likeStatus[1].likedStatus
              ? value.likeStatus[1].count
              : 0;
          pairResult[value["_id"]] = { liked, disliked };
        });
      }

      const variation = await fetchPriceVariation(chain, variationArgs);
      if (data) {
        const newRow = [];
        data.forEach((value, index) => {
          if (index % 2 === 0) {
            let exchangeName = value.exchange.fullName;
            let variationData =
              variation.data.data.ethereum[`variation${index / 2}`];
            let variations = null;
            if (variationData && variationData[0] && variationData[1]) {
              const diff =
                variationData[1].quotePrice - variationData[0].quotePrice;
              variations = {};
              variations.isPositive = Math.sign(diff);
              variations.value = parseFloat(
                (Math.abs(diff) / variationData[1].quotePrice) * 100
              ).toFixed(2);
            }

            if (exchangeName[0] === "<") {
              exchangeName = exchangeName.slice(1).slice(0, -1);
            }
            newRow.push(
              createData(
                [
                  value.baseCurrency.symbol,
                  data[index + 1].baseCurrency.symbol,
                  value.token.address.address,
                ],
                exchangeName,
                value.any,
                variations,
                value.tradeAmount,
                {
                  likeStatus: pairResult[value.token.address.address],
                  signMessage,
                  userLiked: likeStatus[value.token.address.address],
                  chain,
                }
              )
            );
          }
        });
        setRows(newRow);
      } else {
        setRows([]);
      }
    }
    fetchIt();
  }, [chain, signMessage, likeStatus]);

  return (
    <div>
      <Box paddingY="2rem">
        <Container maxWidth="xl">
          <Grid container spacing={1}>
            <Grid item md={12} xs={12}>
              <Box className="recenthist">
                <Paper
                  sx={{
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: "#17293d",
                  }}
                >
                  <TableContainer
                    sx={{ maxHeight: 550 }}
                    className="scrollingwidth"
                  >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              sx={{
                                backgroundColor: "#17293d !important",
                                color: "#f0b90b",
                                borderBottom: "1px solid #0a1929 !important",
                              }}
                              key={column.id}
                              align={column.align}
                              style={{ minWidth: column.minWidth }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row, index) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={`${row.exchange}${index}`}
                              >
                                {columns.map((column, index) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={`${column.id}${index}`}
                                      align={column.align}
                                      sx={{
                                        color: "#fff",
                                        borderBottom:
                                          "1px solid #536a84 !important",
                                        padding: "6px 16px",
                                      }}
                                    >
                                      {column.format &&
                                      typeof value === "number"
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    sx={{ color: "#fff !important" }}
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default FilterTables;
