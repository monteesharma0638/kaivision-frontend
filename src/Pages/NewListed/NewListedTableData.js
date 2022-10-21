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
import { Link } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React from "react";
import { getGainers, getNewListedPairs } from "../../allfunction/FetchFunctions";
import { useParams } from "react-router-dom";
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';


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
    id: "token0",
    label: "Base Currency",
    align: "left",
  },
  {
    id: "token1",
    label: "Quote Currency",
    align: "left",
  },
  {
    id: "creationTime",
    label: "Creation Time",
    align: "left",
  },
  {
    id: "liveChart",
    label: "Live Chart",
    align: "left",
  }
];

let formatter = Intl.NumberFormat('en', { notation: 'compact' });

function createData(
  name,
  exchange,
  token0,
  token1,
  creationTime,
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
    token0: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{token0}</Typography>
      </Box>
    ),
    token1: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{token1}</Typography>
      </Box>
    ),
    creationTime: (
      <Box color="#fff" fontSize="14px">
        <Typography variant="body">{creationTime}</Typography>
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

const NewListedTableData = () => {
    const {chain} = useParams();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setGainersData] = React.useState([]);

  React.useEffect(() => {
    getNewListedPairs(chain).then(result => {
      if(result.data.ethereum.arguments){
        setGainersData(result.data.ethereum.arguments.filter(value => value.token1Symbol !== "-" && value.token0Symbol!=="-" && value.token1Symbol!=="Error in symbol" && value.token0Symbol!=="Error in symbol").map(value => createData(
          [value.token0Symbol, value.token1Symbol, value.pair],
          value.smartContract.address.annotation,
          value.token0Name,
          value.token1Name,
          value.block.timestamp.time,
          chain
        )))
      }
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

export default NewListedTableData;
