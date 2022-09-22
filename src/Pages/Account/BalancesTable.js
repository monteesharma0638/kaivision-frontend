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
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import { useAccount, useContractReads, useNetwork } from "wagmi";
import { fetchBalances, fetchOwnershipTransferred } from "../../allfunction/FetchFunctions";

const columns = [
  {
    id: "symbol",
    label: "Symbol",
  },
  {
    id: "tokenType",
    label: "Token Type",
  },
  {
    id: "address",
    label: "Token Address",
    align: "left",
  },
  {
    id: "balance",
    label: "Balance",
    align: "left",
  }
];

function createData(
  symbol,
  tokenType,
  address,
  balance,
) {
  return {
    symbol: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          
        </Box>
        <Box color="#fff" fontSize="14px">
          <Typography variant="body">{symbol}</Typography>
        </Box>
      </Box>
    ),
    tokenType: (
      <Box display="flex" alignItems="center">
        <Box marginRight="8px" display="flex" alignItems="center">
          
        </Box>
        <Box color="#fff" fontSize="14px">
          <Typography variant="body">{tokenType}</Typography>
        </Box>
      </Box>
    ),
    address: (
      <Box color="#48f00b" fontSize="14px">
        <Typography variant="body">{address}</Typography>
      </Box>
    ),
    balance: <Box color="#fff" fontSize="14px">
    <Typography variant="body">{balance}</Typography>
  </Box>
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


const BalancesTable = (setAddresses) => {
  const {address} = useAccount();
  const {chain} = useNetwork();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
 
  React.useEffect(() => {
    async function fetchIt(){
      const data = await fetchBalances(chain.id, address).catch(err => 0);
      if(data){
        const addresses = data.map(value => value.currency.address);
        setAddresses(addresses);
        const newData = data.filter(value => value.value>0 && value.currency.address !== "-");
        const newRows = newData.map(value => ({
          symbol: value.currency.symbol,
          tokenType: value.currency.tokenType,
          address: value.currency.address,
          balance: value.value
        }))
        setRows(newRows);
      }
      else {
        setRows([createData("", "", "Nothing to display", "", "")])
      }
    }
    fetchIt();
  }, [address, chain.id])

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

export default BalancesTable;
