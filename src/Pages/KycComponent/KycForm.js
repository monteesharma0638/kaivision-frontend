import { Box, Grid, InputLabel, TextField } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

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



const KycForm = () => {
    return (
        <Box paddingY='1rem'>
            <Grid container spacing={2} >
                <Grid item md={6} xs={12}>
                    <Box sx={{ width: '92%' }}>
                        <Fromstext>
                            Fist Name
                        </Fromstext>
                        <InputBase type='text' placeholder='Fist Name' />
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ width: '92%' }}>
                        <Fromstext>
                            Last Name
                        </Fromstext>
                        <InputBase type='text' placeholder='Last Name' />
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ width: '92%' }}>
                        <Fromstext>
                            Wallet Address
                        </Fromstext>
                        <InputBase type='text' placeholder='0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E' />
                    </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Box sx={{ width: '92%' }}>
                        <Fromstext>
                            Number
                        </Fromstext>
                        <InputBase type='number' placeholder='Type Number' />
                    </Box>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Box sx={{ width: '96%' }}>
                        <Fromstext>
                            Email Address
                        </Fromstext>
                        <InputBase type='email' placeholder='Enter Email Address' />
                    </Box>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Box sx={{ width: '96%' }}>
                        <Fromstext>
                            Address
                        </Fromstext>
                        <InputBase type='text' placeholder='Type Your Address' />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default KycForm;