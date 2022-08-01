import { Box, Container, Grid, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Statsdatamaindiv = styled.div`
    border-radius: 12px;
    padding: 20px;
    border: 1px solid ${({ theme }) => theme.soft};
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    
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
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            {show &&
                                <Statsdatamaindiv>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' gap='10px'>
                                        <Box>
                                            <Typography variant='h5' fontWeight='300' gutterBottom component='h5'>
                                                hello BNB
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