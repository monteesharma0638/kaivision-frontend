import React from "react";
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
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import pancakeswap from "../../Assets/Images/pancakeswap.png";
import uniswap from "../../Assets/Images/uniswap.png";
import dodo from "../../Assets/Images/dodo.png";
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import { fetchPriceVariation, fetchTopTradePairs } from "../../allfunction/FetchFunctions";
import { useNetwork } from "wagmi";

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

function createData(
  name,
  exchange,
  price,
  variation,
  hrvolume,
  actions
) {
  return {
    name: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          <img
            src={pancakeswap}
            alt=""
            width="20px"
            height="20px"
            style={{ borderRadius: "50px", objectFit: "cover" }}
          />
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
            src={exchange==="Uniswap v2"? uniswap: exchange === "Dodo"? dodo: pancakeswap}
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
      <Box color="#48f00b" fontSize="14px">
        <Typography variant="body">{variation}</Typography>
      </Box>
    ),
    hrvolume: <Box color="#fff" fontSize="14px">
    <Typography variant="body">{parseFloat(hrvolume).toFixed(2)}</Typography>
  </Box>,
    actions: <Box>
    <WaterfallChartIcon
      sx={{ color: "#f0b90b", cursor: "pointer", fontSize: "18px" }}
    />
  </Box>,
  };
}

// const rows = [
//   createData(
//     ["KCS", "SOL", "0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E"],
//     "ETH, BSC, KCS",
//     "$243.56",
//     "1.50%",
//     "$5.97B",
//     "72.80K",
//     "176.09M",
//     "$945.03B",
//     ""
//   ),
// ];


const FilterTables = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const {chain} = useNetwork();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    React.useEffect(() => {
      async function fetchIt(){
          const data = await fetchTopTradePairs("bsc");
          const variationArgs = [];
          data.forEach((value, index) => {
              if(index%2===0){
                  variationArgs.push({
                      baseCurrency: value.baseCurrency.address,
                      quoteCurrency: data[index + 1].baseCurrency.address
                  })
              }
          })
  
          // const variation = await fetchPriceVariation(chain.id, variationArgs);
          // console.log(variation);
          if(data){
              const newRow = [];
              data.forEach((value, index) => {
                  if(index%2===0){
                      let exchangeName = value.exchange.fullName;
                      if(exchangeName[0]==="<"){
                          exchangeName = exchangeName.slice(1).slice(0, -1);
                      }
                      newRow.push(createData(
                          [value.baseCurrency.symbol, data[index + 1].baseCurrency.symbol, value.token.address.address],
                          exchangeName,
                          value.any,
                          "1.50%",
                          value.tradeAmount,
                          value.trades,
                          ""
                      ))
                  }
              })
              setRows(newRow);
          }
          else {
              setRows([]);
          }
      }
      fetchIt();
    }, [chain])


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
