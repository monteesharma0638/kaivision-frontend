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
import { Link, useParams } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import styled from "styled-components";
import { fetchRecentTransactions } from "../../allfunction/FetchFunctions";

const Pairsboxbg = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: 10px;
  border-radius: 12px;
  margin-top: 1rem;
`;

const columns = [
  {
    id: "date",
    label: "Date",
  },
  {
    id: "type",
    label: "Type",
  },
  {
    id: "price",
    label: "Buy Amount",
    align: "left",
  },
  {
    id: "variation",
    label: "Sell Amount",
    align: "left",
  },
  {
    id: "hrvolume",
    label: "Price",
    align: "left",
  },
  {
    id: "swaps",
    label: "TNX",
    align: "right",
  },
];

function createData(date, type, price, variation, hrvolume, swaps) {
  return {
    date: (
      <Box display="flex" alignItems="center">
        <Typography variant="body">{date}</Typography>
      </Box>
    ),
    type: (
      <Box display="flex" alignItems="center">
        <Box color="#fff" fontSize="14px">
          <Typography variant="body">{type}</Typography>
        </Box>
      </Box>
    ),
    price: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{price}</Typography>
      </Box>
    ),
    variation: (
      <Box color={type==="BUY"?"#48f00b": "red"} fontSize="14px">
        <Typography variant="body">{variation}</Typography>
      </Box>
    ),
    hrvolume: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{hrvolume}</Typography>
      </Box>
    ),
    swaps: (
      <Box>
        <Link to="/">
          <Typography
            variant="body"
            fontSize="13px"
            color="#f0b90b"
            className="addreswidth"
          >
            {swaps}
          </Typography>
        </Link>
        <ContentCopyIcon sx={{ fontSize: "14px", marginLeft: "5px" }} />
      </Box>
    ),
  };
}

// const rows = [
//   createData(
//     "Jul 15th 07:17:07 PM",
//     "Buy",
//     "2.28",
//     "2.28",
//     "$238.3863",
//     "0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E"
//   ),
// ];
let formatter = Intl.NumberFormat('en', { notation: 'compact' })

const PairTable = ({pairCurrencies}) => {
  const { chain } = useParams();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    if(pairCurrencies){
      fetchRecentTransactions(pairCurrencies.baseCurrency.address, chain)
      .then(result=> {
          const data = result.data.data.ethereum.dexTrades;
          const newRows = data.map(value => createData(
              (new Date(value.block.timestamp.unixtime*1000)).toUTCString(),
              value.side,
              formatter.format(value.buyAmount),
              formatter.format(value.sellAmount),
              formatter.format(value.any),
              value.transaction.hash
          ));
          setRows(newRows);
      })
    }
  }, [pairCurrencies, chain])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Pairsboxbg>
        <Box className="recenthist">
          <Paper
            sx={{
              width: "100%",
              overflow: "hidden",
              backgroundColor: "#17293d",
            }}
          >
            <TableContainer sx={{ maxHeight: 550 }} className="scrollingwidth">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell
                        sx={{
                          backgroundColor: "#17293d !important",
                          color: "#f0b90b",
                          borderBottom: "1px solid #0a1929 !important",
                        }}
                        key={`${column.id}${index}`}
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.exchange}
                        >
                          {columns.map((column, index) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={`${column.id}${column.label}${index}`}
                                align={column.align}
                                sx={{
                                  color: "#fff",
                                  borderBottom: "1px solid #536a84 !important",
                                  padding: "6px 16px",
                                }}
                              >
                                {column.format && typeof value === "number"
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
      </Pairsboxbg>
    </div>
  );
};

export default PairTable;
