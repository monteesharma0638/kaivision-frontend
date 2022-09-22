import { Box, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
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
const Links = styled.a`
    color: ${({ theme }) => theme.iconcr} ;
`

const AddList = () => {

    return (
        <div>
            <Box paddingTop='10px'>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pair
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Links>
                            <Typography fontWeight='300' variant='body'>
                                0x16b9...0daE
                            </Typography>
                        </Links>
                    </Link>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pair:
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Links>
                            <Typography fontWeight='300' variant='body'>
                                0x16b9...0daE
                            </Typography>
                        </Links>
                    </Link>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pooled ETH:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        338,874
                    </Typography>
                </Pooldetails>
                <Pooldetails>
                    <Typography fontWeight='300' variant='body'>
                        Pooled BSC:
                    </Typography>
                    <Typography fontWeight='300' variant='body'>
                        80,201,230 ($80M)
                    </Typography>
                </Pooldetails>
            </Box>
        </div>
    )
}

export default AddList;