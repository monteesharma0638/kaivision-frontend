import React from 'react'
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
    Typography
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import pancakeswap from '../../Assets/Images/pancakeswap.png'
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import styled from 'styled-components';

const Pairsboxbg = styled.div`
    background: ${({ theme }) => theme.bg};
    padding:10px;
    border-radius: 12px;
    margin-top:1rem;
`


const columns = [
    {
        id: 'date',
        label: 'Date',
    },
    {
        id: 'type',
        label: 'Type',
    },
    {
        id: 'price',
        label: 'USD ',
        align: 'left',
    },
    {
        id: 'variation',
        label: 'USDT',
        align: 'start',
    },
    {
        id: 'hrvolume',
        label: 'Price',
        align: 'start',
    },
    {
        id: 'swaps',
        label: 'TNX',
        align: 'right',
    },

];

function createData(
    date,
    type,
    price,
    variation,
    hrvolume,
    swaps,
) {
    return {
        date,
        type,
        price,
        variation,
        hrvolume,
        swaps,
    };
}

const rows = [
    createData(
        <Box display='flex' alignItems='center'>
            <Typography variant='body'>
                Jul 15th 07:17:07 PM
            </Typography>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    Buy
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $238.3863
            </Typography>
        </Box>,
        <Box>
            <Link to='/'>
                <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                    0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
        </Box>,
    ),
    createData(
        <Box display='flex' alignItems='center'>
            <Typography variant='body'>
                Jul 15th 07:17:07 PM
            </Typography>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    Buy
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $238.3863
            </Typography>
        </Box>,
        <Box>
            <Link to='/'>
                <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                    0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
        </Box>,
    ),
    createData(
        <Box display='flex' alignItems='center'>
            <Typography variant='body'>
                Jul 15th 07:17:07 PM
            </Typography>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    Sell
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $238.3863
            </Typography>
        </Box>,
        <Box>
            <Link to='/'>
                <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                    0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
        </Box>,
    ),
    createData(
        <Box display='flex' alignItems='center'>
            <Typography variant='body'>
                Jul 15th 07:17:07 PM
            </Typography>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    Sell
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $238.3863
            </Typography>
        </Box>,
        <Box>
            <Link to='/'>
                <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                    0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
        </Box>,
    ),
    createData(
        <Box display='flex' alignItems='center'>
            <Typography variant='body'>
                Jul 15th 07:17:07 PM
            </Typography>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    Buy
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                2.28
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $238.3863
            </Typography>
        </Box>,
        <Box>
            <Link to='/'>
                <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                    0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                </Typography>
            </Link>
            <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
        </Box>,
    ),
];


const PairTable = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                <Box className='recenthist'>
                    <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#17293d' }}>
                        <TableContainer sx={{ maxHeight: 550 }} className='scrollingwidth'>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell sx={{ backgroundColor: '#17293d !important', color: '#f0b90b', borderBottom: '1px solid #0a1929 !important' }}
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
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.exchange}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align} sx={{ color: '#fff', borderBottom: '1px solid #536a84 !important', padding: '6px 16px' }}>
                                                                {column.format && typeof value === 'number'
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
    )
}

export default PairTable;