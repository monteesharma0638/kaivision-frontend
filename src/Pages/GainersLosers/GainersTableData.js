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
import React from 'react';


const columns = [
    {
        id: 'name',
        label: 'Token',
    },
    {
        id: 'exchange',
        label: 'Exchange',
    },
    {
        id: 'price',
        label: 'Price ',
        align: 'left',
    },
    {
        id: 'variation',
        label: '24h Price variation',
        align: 'start',
    },
    {
        id: 'hrvolume',
        label: '5M',
        align: 'start',
    },
    {
        id: 'swaps',
        label: '1H',
        align: 'start',
    },
    {
        id: 'totalsliq',
        label: '6H',
        align: 'right',
    },
    {
        id: 'fvds',
        label: 'FVD ',
        align: 'right',
    },
    {
        id: 'actions',
        label: 'Liquidity',
        align: 'right',
    },
];

function createData(
    name,
    exchange,
    price,
    variation,
    hrvolume,
    swaps,
    totalsliq,
    fvds,
    actions,
) {
    return {
        name,
        exchange,
        price,
        variation,
        hrvolume,
        swaps,
        totalsliq,
        fvds,
        actions,
    };
}

const rows = [
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
    createData(
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box>
                <Box display='flex' alignItems='center' color='#fff' fontSize='14px'>
                    <Typography variant='body'>
                    ROSE
                    </Typography>
                    <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                        /
                    </Typography>
                    <Typography variant='body'>
                    ETH
                    </Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Link to='/'>
                        <Typography variant='body' fontSize='13px' color='#f0b90b' className='addreswidth'>
                            0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E &nbsp;
                        </Typography>
                    </Link>
                    <ContentCopyIcon sx={{ fontSize: '14px', marginLeft: '5px' }} />
                </Box>
            </Box>
        </Box>,
        <Box display='flex' alignItems='center'>
            <Box marginRight='8px' display='flex' alignItems='center'>
                <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
            </Box>
            <Box color='#fff' fontSize='14px'>
                <Typography variant='body'>
                    ETH, BSC, KCS
                </Typography>
            </Box>
        </Box>
        ,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243.56
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                1.50%
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $5.97B
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                72.80K
            </Typography>
        </Box>,
        <Box color='#f00b0b' fontSize='14px'>
            <Typography variant='body'>
                176.09M
            </Typography>
        </Box>,
        <Box color='#48f00b' fontSize='14px'>
            <Typography variant='body'>
                $945.03B
            </Typography>
        </Box>,
        <Box color='#fff' fontSize='14px'>
            <Typography variant='body'>
                $243k
            </Typography>
        </Box>,
    ), 
     



];
 
const GainersTableData = () => {

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
            <Box paddingY='1rem' paddingX='10px'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <Box className='recenthist'>
                                <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#17293d' }}>
                                    <TableContainer sx={{ maxHeight: 800 }} className='scrollingwidth'>
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
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default GainersTableData;