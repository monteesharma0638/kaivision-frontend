import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import TrendsData from './TrendsData';



const Trendsbox = styled.div`
    height:100%
`

const Submitbtn = styled.button`
    background: ${({ theme }) => theme.bgBtns}; 
    border: 1px solid ${({ theme }) => theme.bgBtns}; 
    color: ${({ theme }) => theme.text};
    position: relative; 
    padding: 10.8px 12px; 
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    width: 60px;
`
const Sselect = styled.select`
    padding: 10px 14px;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.bg};
    width:100%;
    font-size:16px

`


const Trends = () => {
    return (
        <div>
            <Trendsbox>
                <Box padding='1rem'>
                    <Container maxWidth='xl'>
                        <Grid container spacing={1}>
                            <Grid item md={2} sm={6} xs={12}>
                                <Box>
                                    <Sselect class="FormSelect">
                                        <option selected>All Trend Types</option>
                                        <option value="0">Price Change</option>
                                        <option value="1">Price Change - Up</option>
                                        <option value="2">Price Change - Down</option>
                                        <option value="3">Increased Volume</option>
                                        <option value="4">Recent Listing</option> 
                                    </Sselect>
                                </Box>
                            </Grid>
                            <Grid item md={2} sm={6} xs={12}>
                                <Box>
                                    <Sselect class="FormSelect">
                                        <option selected>All Platforms</option>
                                        <option value="0">ETH</option>
                                        <option value="1">BSC</option>
                                        <option value="2">KCS</option>
                                        <option value="3">LUNA</option>
                                        <option value="4">ROSE</option> 
                                        <option value="5">SOL</option> 
                                    </Sselect>
                                </Box>
                            </Grid>
                            <Grid item md={2} sm={6} xs={12}>
                                <Box>
                                    <Sselect class="FormSelect">
                                        <option selected>All Timeframes</option>
                                        <option value="0">5 minutes</option>
                                        <option value="1">1 Day</option>
                                        <option value="2">7 Week</option>
                                        <option value="3">1 Month</option>
                                        <option value="4">6 Month</option>
                                        <option value="5">1 Year</option>  
                                    </Sselect>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box>
                    <TrendsData />
                </Box>
            </Trendsbox>
        </div>
    )
}

export default Trends;