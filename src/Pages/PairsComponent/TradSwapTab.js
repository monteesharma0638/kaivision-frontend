import { Box, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

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

const TradSwapTab = () => {


    return (
        <div>
            <Poolinfos >
                <Typography fontWeight='400' variant='body'>
                    FSTSWAP POOL INFO
                </Typography>
            </Poolinfos>
            <Hr/>
            <Box paddingTop='10px'>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total liquidity:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        $72.45K
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        24h volume:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        $2.53M
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pooled FIST:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        26.29K
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pooled OSK-DAO:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        200.13K
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total Market Cap:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        $537.15K
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Total Supply:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        Total Supply:
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pool created:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        4/12/2022 17:00
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        % Pooled OSK-DAO:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        2.00%
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        1 BNB:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        1.32K OSK-DAO
                    </Typography>
                </Pooldetails>

            </Box>

        </div>
    )
}

export default TradSwapTab;