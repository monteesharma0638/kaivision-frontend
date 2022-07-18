import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import KycForm from './KycForm';


const Kycsmaindiv = styled.div`
height:100vh
`

const Kycbox = styled.div`
    background: ${({ theme }) => theme.bg};
    padding:1.5rem 2rem;
    border-radius: 12px;
    height:100%;
`
const Kycheading = styled.div`
    color: ${({ theme }) => theme.iconcr}; 
`
const Requred = styled.h6`
    color: ${({ theme }) => theme.text};
    font-weight:300;
    font-size:20px;
    margin:10px 0
`
const Requredproof = styled.span`
    color: ${({ theme }) => theme.textSoft};
    font-weight:400;
    font-size:14px;
    margin:10px 0
`
const InputBase = styled.input`
    color: ${({ theme }) => theme.text};
    width: 100%;
    padding: 10px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.soft};
    border-radius: 3px; 
`

const Fromstext = styled.div`
    color: ${({ theme }) => theme.text};
    font-weight:300;
    margin-bottom:7px;
`
const Tyutton = styled.button`
    background: ${({ theme }) => theme.bgBtns};
    color: ${({ theme }) => theme.text};
    width: 100%;
    border: none;
    padding: 13px 10px;
    border-radius: 12px;
    cursor: pointer;
`



const Kyc = () => {
    return (
        <div>
            <Kycsmaindiv>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={7} xs={12}>
                            <Kycbox>
                                <Box>
                                    <Kycheading>
                                        <Typography variant='h5' fontWeight='400'>
                                            KYC
                                        </Typography>
                                    </Kycheading>
                                    <Requred>
                                        1. Requred Documents
                                    </Requred>
                                </Box>
                                <KycForm />
                            </Kycbox>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Kycbox>
                                <Box>
                                    <Kycheading>
                                        <Typography variant='h5' fontWeight='400'>
                                            2. Proof of Documents
                                        </Typography>
                                    </Kycheading>
                                    <Requred>
                                        Upload Documents
                                    </Requred>
                                    <Requredproof>
                                        Proof of address documents can be one of the the following:
                                    </Requredproof>
                                    <Requredproof>
                                        PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                                    </Requredproof>
                                </Box>
                                <Box paddingTop='2rem'>
                                    <Box sx={{ width: '92%' }}>
                                        <Fromstext>
                                            Government Documents Upload
                                        </Fromstext>
                                        <InputBase type='file' placeholder='Type Number' />
                                    </Box>
                                    <Box paddingY='2rem' sx={{ width: '92%' }}>
                                        <Fromstext>
                                            Upload Selfy
                                        </Fromstext>
                                        <InputBase type='file' placeholder='Type Number' />
                                    </Box>
                                    <Box width='100%'>
                                        <Tyutton className='btn'>
                                            Submit
                                        </Tyutton>
                                    </Box>
                                </Box>
                            </Kycbox>
                        </Grid>
                    </Grid>
                </Container>
            </Kycsmaindiv>
        </div>
    )
}

export default Kyc;