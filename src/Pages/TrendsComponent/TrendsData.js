import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import pancakeswap from '../../Assets/Images/pancakeswap.png'
import { Link } from 'react-router-dom';

const Datasection = styled.div`
    background: ${({ theme }) => theme.bg};
    padding:1rem 2rem;
    border-radius: 12px;
    height:100%;
    display:flex;
    align-items:center;
    flex-wrap: wrap;
    justify-content:space-between;
`

const Textypography = styled.span`
    color: ${({ theme }) => theme.text};

`
const Pricetypography = styled.a`
    color: ${({ theme }) => theme.text };
    font-size: 17px;

`


const TrendsData = () => {
    return (
        <div>
            <Box padding='1rem'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={12} sm={12} xs={12} >
                            <Box>
                                <Link to='/pair-explorer' >
                                    <Datasection>
                                        <Box>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            ETH
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <ChevronRightIcon sx={{color:'#48f00b'}} />
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            KCS
                                                        </Textypography>
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            5 mint Ago
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box marginTop='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box fontSize='14px'>
                                                        <TrendingUpIcon sx={{color:'#48f00b'}} />
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            Volume increased significantly in the last 5 minutes
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Price
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Liquidity
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        Fav
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                            </Box>

                                            <Box marginTop='10px' display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        5 minutes
                                                    </Typography>
                                                    <Typography variant='body' color='#48f00b'>
                                                        7.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        1 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#48f00b'>
                                                        72.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        6 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#f0b90b'>
                                                        2%
                                                    </Typography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        24 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#ff1a1a'>
                                                        0.6%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Datasection>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Box>
                                <Link to='/pair-explorer' >
                                    <Datasection>
                                        <Box>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            ETH
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <ChevronRightIcon sx={{color:'#48f00b'}} />
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            KCS
                                                        </Textypography>
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            5 mint Ago
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box marginTop='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box fontSize='14px'>
                                                        <TrendingUpIcon sx={{color:'#48f00b'}} />
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            Volume increased significantly in the last 5 minutes
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Price
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Liquidity
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        Fav
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                            </Box>

                                            <Box marginTop='10px' display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        5 minutes
                                                    </Typography>
                                                    <Typography variant='body' color='#48f00b'>
                                                        7.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        1 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#48f00b'>
                                                        72.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        6 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#f0b90b'>
                                                        2%
                                                    </Typography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        24 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#ff1a1a'>
                                                        0.6%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Datasection>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Box>
                                <Link to='/pair-explorer' >
                                    <Datasection>
                                        <Box>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            ETH
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <ChevronRightIcon sx={{color:'#48f00b'}} />
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            KCS
                                                        </Textypography>
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            5 mint Ago
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box marginTop='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box fontSize='14px'>
                                                        <TrendingUpIcon sx={{color:'#48f00b'}} />
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            Volume increased significantly in the last 5 minutes
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Price
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Liquidity
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        Fav
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                            </Box>

                                            <Box marginTop='10px' display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        5 minutes
                                                    </Typography>
                                                    <Typography variant='body' color='#48f00b'>
                                                        7.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        1 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#48f00b'>
                                                        72.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        6 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#f0b90b'>
                                                        2%
                                                    </Typography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        24 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#ff1a1a'>
                                                        0.6%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Datasection>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Box>
                                <Link to='/pair-explorer' >
                                    <Datasection>
                                        <Box>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            ETH
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <ChevronRightIcon sx={{color:'#48f00b'}} />
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            KCS
                                                        </Textypography>
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            5 mint Ago
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box marginTop='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box fontSize='14px'>
                                                        <TrendingUpIcon sx={{color:'#48f00b'}} />
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            Volume increased significantly in the last 5 minutes
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Price
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Liquidity
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        Fav
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                            </Box>

                                            <Box marginTop='10px' display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        5 minutes
                                                    </Typography>
                                                    <Typography variant='body' color='#48f00b'>
                                                        7.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        1 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#48f00b'>
                                                        72.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        6 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#f0b90b'>
                                                        2%
                                                    </Typography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        24 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#ff1a1a'>
                                                        0.6%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Datasection>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} >
                            <Box>
                                <Link to='/pair-explorer' >
                                    <Datasection>
                                        <Box>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            ETH
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <ChevronRightIcon sx={{color:'#48f00b'}} />
                                                </Box>
                                                <Box display='flex' alignItems='center'>
                                                    <Box marginRight='8px' display='flex' alignItems='center'>
                                                        <img src={pancakeswap} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                    </Box>
                                                    <Box fontSize='14px'>
                                                        <Textypography variant='body'>
                                                            KCS
                                                        </Textypography>
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            5 mint Ago
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box marginTop='10px'>
                                                <Box display='flex' alignItems='center'>
                                                    <Box fontSize='14px'>
                                                        <TrendingUpIcon sx={{color:'#48f00b'}} />
                                                    </Box>
                                                    <Box fontSize='14px' marginLeft='10px'>
                                                        <Textypography variant='body'>
                                                            Volume increased significantly in the last 5 minutes
                                                        </Textypography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Price
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        Liquidity
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        Fav
                                                    </Typography>
                                                    <Pricetypography>
                                                        $0.0006385
                                                    </Pricetypography>
                                                </Box>
                                            </Box>

                                            <Box marginTop='10px' display='flex' alignItems='center' justifyContent='space-between' sx={{ gap: { xs: '20px', md: '70px' } }}>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        5 minutes
                                                    </Typography>
                                                    <Typography variant='body' color='#48f00b'>
                                                        7.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        1 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#48f00b'>
                                                        72.35%
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'>
                                                        6 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#f0b90b'>
                                                        2%
                                                    </Typography>
                                                </Box>
                                                <Box textAlign='end'>
                                                    <Typography variant='body2' gutterBottom color='#5d7188'  >
                                                        24 Hour
                                                    </Typography>
                                                    <Typography variant='body1' color='#ff1a1a'>
                                                        0.6%
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Datasection>
                                </Link>
                            </Box>
                        </Grid> 
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default TrendsData;