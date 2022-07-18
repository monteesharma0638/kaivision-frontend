import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import AddList from './AddList';
import PairChart from './PairChart';
import PairTable from './PairTable';
import TradSwapTab from './TradSwapTab';

const Poolsmaindiv = styled.div`  
`
const Pools = styled.div`
    background: ${({ theme }) => theme.bg};
    padding:1.5rem 2rem;
    border-radius: 12px;
    margin-bottom:1rem;
`

const PairExplorer = () => {
    return (
        <div>
            <Poolsmaindiv> 
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={9} xs={12}>
                            <Box>
                                <PairChart />
                                <PairTable />
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Pools>
                                <TradSwapTab />
                            </Pools>
                            <Pools>
                                <AddList />
                            </Pools>
                        </Grid>
                    </Grid>
                </Container>
            </Poolsmaindiv>
        </div>
    )
}

export default PairExplorer;