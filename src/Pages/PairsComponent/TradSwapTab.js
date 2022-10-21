import { Box, Typography } from '@mui/material';
import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import {getContractCreation, getDayVolume, getTokenDetails, getUsdPrice} from "./../../allfunction/FetchFunctions";

const Poolinfos = styled.span`
    color: ${({ theme }) => theme.text};
`
const Pooldetails = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0 ;
`
const Hr = styled.hr`
    margin:0.6rem 0;
    border: 0.6px solid ${({ theme }) => theme.soft}; 
`
const formatter = Intl.NumberFormat("en", { notation: "compact" });

const TradSwapTab = ({pairCurrencies, reserves}) => {
    const { chain, pair } = useParams();
    const [dayVolume, setDayVolume] = React.useState(0);
    const [baseUsdPrice, setBaseUsdPrice] = React.useState(0);
    const [tokenDetails, setTokenDetails] = React.useState(0);
    const [marketCap, setMarketCap] = React.useState(0);
    const [tokenSupply, setTokenSupply] = React.useState(0);
    const [pairCreation, setPairCreation] = React.useState(0);


    React.useState(() => {
        getContractCreation(chain, pair)
        .then(result => {
            if(result){
                if(result.data.ethereum.transactions.length){
                    setPairCreation(new Date(result.data.ethereum.transactions[0].any));
                }
                else {
                    setPairCreation("......");
                }
            }
        })
    }, [chain, pair])


    React.useEffect(() => {
        getDayVolume(chain, pair)
        .then(result => {
            setDayVolume(formatter.format(result));
        })
    }, [chain, pair])
    
    React.useEffect(() => {
        if(pairCurrencies){
            getTokenDetails(chain, pairCurrencies.quoteCurrency.address)
            .then(result => {
                if(result){
                    setTokenDetails(result.data.ethereum.transfers[0]);
                }
            });
        }
    }, [chain, pairCurrencies])

    React.useEffect(() => {
        if(tokenDetails && baseUsdPrice){
            const marketCap = tokenDetails.contractMints + tokenDetails.minted - tokenDetails.burned;
            setMarketCap(marketCap*baseUsdPrice);
            setTokenSupply(marketCap);
        }
    }, [tokenDetails, baseUsdPrice])

    React.useEffect(() => {
        if(pairCurrencies){
            getUsdPrice(chain, pairCurrencies.baseCurrency.address)
            .then(result => {
                // console.log(result);
                if(result){
                    const price = result.data.ethereum.dexTrades[0].quotePrice;
                    setBaseUsdPrice(price);
                }
            })
        }
    }, [pairCurrencies, chain])

    return (
        <div>
            <Poolinfos >
                <Typography fontWeight='400' variant='body'>
                   {pairCurrencies? `(${pairCurrencies.baseCurrency.symbol}/${pairCurrencies.quoteCurrency.symbol})`: `(...___...)`} Pool Info
                </Typography>
            </Poolinfos>
            <Hr/>
            <Box paddingTop='10px'>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total liquidity:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        ${formatter.format(reserves.baseCurrency*baseUsdPrice)}
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        24h volume:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        ${dayVolume}
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total Market Cap:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        ${formatter.format(marketCap)}
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total Supply:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        {formatter.format(tokenSupply)}
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pool created:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        {pairCreation? pairCreation.toLocaleString(): "..."}
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        % Pooled OSK-DAO:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        {formatter.format((reserves.quoteCurrency/tokenSupply)*100)}%
                    </Typography>
                </Pooldetails>
            </Box>

        </div>
    )
}

export default TradSwapTab;