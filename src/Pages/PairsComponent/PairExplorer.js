import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPairCurrencies } from '../../allfunction/FetchFunctions';
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
    const {chain, pair} = useParams();
    const [pairCurrencies, setPairCurrencies] = React.useState(0);
    const [reserves, setReserves]= React.useState({
        baseCurrency: "...",
        quoteCurrency: "..."
      })

    React.useEffect(() => {
        getPairCurrencies(chain, pair)
        .then(result => {
           setPairCurrencies(result);
        })
      }, [chain, pair])
    return (
        <div>
            <Poolsmaindiv> 
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={9} xs={12}>
                            <Box>
                                <PairChart pairCurrencies={pairCurrencies} />
                                <PairTable pairCurrencies={pairCurrencies} />
                            </Box>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Pools>
                                <TradSwapTab pairCurrencies={pairCurrencies} reserves={reserves} />
                            </Pools>
                            <Pools>
                                <AddList pairCurrencies={pairCurrencies} reserves={reserves} setReserves={setReserves} />
                            </Pools>
                        </Grid>
                    </Grid>
                </Container>
            </Poolsmaindiv>
        </div>
    )
}

export default PairExplorer;