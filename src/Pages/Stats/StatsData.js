import { Avatar, Box, Container, Grid, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Statsdatamaindiv = styled.div`
    border-radius: 25px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.soft};
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    height: 100%;
    transition: 0.2s;
    cursor: pointer;
    &:hover{
        transform: translateY(-15px);
        border: 1px solid ${({ theme }) => theme.bgBtns};
    }
    
`
const Closebtn = styled.div`
    border: 1px solid ${({ theme }) => theme.soft};
    background: ${({ theme }) => theme.soft};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        transform: rotate(360deg);
        background: ${({ theme }) => theme.bgBtns};
    }
`
const Hotsbnb = styled.div` 
background: ${({ theme }) => theme.bgitems};
    padding:3px 5px;
    border-radius:3px;
    margin: 10px 0;
`



const StatsData = () => {
    const [show, setShow] = useState(true);
    const handleTab = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }
    return (
        <div>
            <Box paddingY='4rem'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item lg={3} md={4} sm={12} xs={12}>
                            {show &&
                                <Statsdatamaindiv>
                                    <Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                            <Box display='flex' alignItems='center' gap='10px'>
                                                <Avatar src='' />
                                                <Typography variant='h5' fontWeight='300' component='h5'>
                                                    HOT BNB
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Tooltip title="Close" placement="left">
                                                    <Closebtn onClick={handleTab}>
                                                        <CloseIcon />
                                                    </Closebtn>
                                                </Tooltip>
                                            </Box>
                                        </Box>
                                        <Box paddingTop='2rem'>
                                            <Hotsbnb>
                                                <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                            #1
                                                        </Typography>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            HOT BNB
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            $0.3912
                                                        </Typography>
                                                        <Box>
                                                            <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Hotsbnb>

                                            <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                        #1
                                                    </Typography>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        HOT BNB
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        $0.3912
                                                    </Typography>
                                                    <Box>
                                                        <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Hotsbnb>
                                                <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                            #1
                                                        </Typography>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            HOT BNB
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            $0.3912
                                                        </Typography>
                                                        <Box>
                                                            <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Hotsbnb>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                        #1
                                                    </Typography>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        HOT BNB
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        $0.3912
                                                    </Typography>
                                                    <Box>
                                                        <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>

                                            <Hotsbnb>
                                                <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                            #1
                                                        </Typography>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            HOT BNB
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            $0.3912
                                                        </Typography>
                                                        <Box>
                                                            <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Hotsbnb>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                        #1
                                                    </Typography>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        HOT BNB
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        $0.3912
                                                    </Typography>
                                                    <Box>
                                                        <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Hotsbnb>
                                                <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                            #1
                                                        </Typography>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            HOT BNB
                                                        </Typography>
                                                    </Box>
                                                    <Box display='flex' alignItems='center' gap='10px'>
                                                        <Typography variant='body' fontWeight='300' component='body'>
                                                            $0.3912
                                                        </Typography>
                                                        <Box>
                                                            <WaterfallChartIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Hotsbnb>
                                            <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='h6' color='#f0b90b' fontWeight='300' component='h6'>
                                                        #1
                                                    </Typography>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        ???????
                                                    </Typography>
                                                </Box>
                                                <Box display='flex' alignItems='center' gap='10px'>
                                                    <Typography variant='body' fontWeight='300' component='body'>
                                                        $???????????
                                                    </Typography>
                                                    <Box>
                                                        <QuestionMarkIcon sx={{ color: '#f0b90b', marginRight: '6px' }} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>

                                    </Box>
                                </Statsdatamaindiv>
                            }
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default StatsData;