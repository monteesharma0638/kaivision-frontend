import {
  Box,
  Container,
  Grid,
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pancakeswap from "../../Assets/Images/pancakeswap.png";
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import React from "react";
import { getGainers } from "../../allfunction/FetchFunctions";
import { useParams } from "react-router-dom";

const columns = [
  {
    id: "name",
    label: "Token",
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
    label: "24 hours Volume",
    align: "left",
  },
  {
    id: "swaps",
    label: "24 hours swaps",
    align: "left",
  },
  {
    id: "totalsliq",
    label: "24 hours liquiidty",
    align: "right",
  },
  {
    id: "fvds",
    label: "FVD ",
    align: "right",
  },
  {
    id: "liveChart",
    label: "Live Chart ",
    align: "right",
  },
];

let formatter = Intl.NumberFormat('en', { notation: 'compact' });

function createData(
  name,
  exchange,
  price,
  variation,
  hrvolume,
  swaps,
  totalsliq,
  fvds,
  chain
) {
  return {
    name: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          {/* <img
            src={pancakeswap}
            width="20px"
            height="20px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
          /> */}
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
            <Link to={`/pair-explorer/${chain}/${name[2]}`}>
              <Typography
                variant="body"
                fontSize="13px"
                color="#f0b90b"
                className="addreswidth"
              >
                {name[2]} &nbsp;
              </Typography>
            </Link>
            <ContentCopyIcon onClick={e => {
              navigator.clipboard.writeText(name[2]);
              alert("copied " + name[2]);
            }} sx={{ fontSize: "14px", marginLeft: "5px" }} />
          </Box>
        </Box>
      </Box>
    ),
    exchange: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          {/* <img
            src={pancakeswap}
            width="20px"
            height="20px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
          /> */}
        </Box>
        <Box color="#fff" fontSize="14px">
          <Typography variant="body">{exchange}</Typography>
        </Box>
      </Box>
    ),
    price: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{formatter.format(price)}</Typography>
      </Box>
    ),
    variation: (
      <Box color="#48f00b" fontSize="14px">
        <Typography variant="body">{Math.abs(variation)} %</Typography>
      </Box>
    ),
    hrvolume: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{formatter.format(hrvolume)}</Typography>
      </Box>
    ),
    swaps: (
      <Box color="#48f00b" fontSize="14px">
        <Typography variant="body">{formatter.format(swaps)}</Typography>
      </Box>
    ),
    totalsliq: (
      <Box color="#f00b0b" fontSize="14px">
        <Typography variant="body">{formatter.format(totalsliq)}</Typography>
      </Box>
    ),
    fvds: (
      <Box color="#48f00b" fontSize="14px">
        <Typography variant="body">{formatter.format(fvds)}</Typography>
      </Box>
    ),
    liveChart: (
      <Tooltip title="Shaow Live Data" placement="top-start">
          <Link to={`/pair-explorer/${chain}/${name[2]}`}>
              <WaterfallChartIcon
                  sx={{
                  color: "#f0b90b",
                  cursor: "pointer",
                  fontSize: "18px",
                  }}
              />
          </Link>
      </Tooltip>
    )
  };
}

// const rows = [
//   createData(
//     ["Rose", "ETH", "pairAddress"],
//     "exchangeName",
//     "205.59%",
//     "3.5%",
//     "24hrvolume",
//     "24hrswaps",
//     "totalsliq",
//     "fvds",
//     352
//   ),
// ];

const GainersTableData = () => {
    const {chain} = useParams();
    console.log(chain);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setGainersData] = React.useState([]);

  React.useEffect(() => {
    getGainers(chain).then((result) => {
      setGainersData(result.map(value => createData(
        [value.pair.symbol, value.pair.symbolRef, value._id.pair],
        value._id.exchange,
        value.price,
        value.priceDiff,
        value.volume,
        value.swaps,
        value.pair.metrics.liquidity,
        value.token.metrics.fdv,
        chain
      )));
    });
  }, [chain]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Box paddingY="1rem" paddingX="10px">
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
                    sx={{ maxHeight: 800 }}
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
                          .map((row) => {
                            return (
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={row.name[2]}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell
                                      key={`${column.id}${row.name[2]}`}
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

export default GainersTableData;
