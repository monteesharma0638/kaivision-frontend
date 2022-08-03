import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';



const Createtext = styled.div`
    color: ${({ theme }) => theme.text};
`

const Inputbase = styled.input`
    padding:13px;
    border-radius:4px;
    border:1px solid ${({ theme }) => theme.textSoft} ;
    width:94%;
    font-size:16px; 
    color: ${({ theme }) => theme.text};
    background: transparent;
`
const Cover = styled.div`
    background: ${({ theme }) => theme.bg}; 
    padding:2rem ;
    border-radius:12px;  
`

const Connectbtn = styled.button` 
        cursor: pointer; 
        background: ${({ theme }) => theme.iconcr};
        border:1px solid ${({ theme }) => theme.bg} ;
        padding: 14px 20px;
        border-radius: 5px;
        width:100%;
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        transition: 0.5s; 
        &:hover { 
            background: ${({ theme }) => theme.bgitems};
            color: ${({ theme }) => theme.text};
        }
`
const Uploadtext = styled.div`
    background: ${({ theme }) => theme.bgitems};
    padding:1rem 10px;
    border-radius: 12px;
`


const AccountUser = () => {

    return (
        <div>
            <Box>
                <Container maxWidth='lg'>
                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <Box textAlign='center'>
                                <Createtext>
                                    <Typography variant='h3' gutterBottom component='h3'>
                                        User Profile
                                    </Typography>
                                </Createtext>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box paddingTop='2rem'>
                <Container maxWidth='lg'>
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={4} xs={12}>
                            <Box>
                                <Cover>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant='h6' textAlign='center' fontWeight='500' gutterBottom component='h6'>
                                            Hello Jon
                                        </Typography>
                                        <Typography variant='body2' textAlign='center' gutterBottom component='body2'>
                                            @Hello_Jon
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'center', margin: 'auto', paddingY: '1rem' }}>
                                        <Avatar src='' sx={{ width: '100px', height: '100px', textAlign: 'center', margin: 'auto' }} />
                                    </Box>
                                    <Box sx={{ textAlign: 'center' }} >
                                        <Button variant="contained" component="label" style={{ boxShadow: 'none', background: '#f0b90b' }}>
                                            Upload New Photo
                                            <input hidden accept="image/*" multiple type="file" />
                                        </Button>
                                    </Box>
                                    <Box sx={{ paddingY: '1rem' }}>
                                        <Uploadtext>
                                            <Typography variant='body2' textAlign='center'>
                                                Upload a new avtar. larger images will be resized automatically.
                                            </Typography>
                                            <Typography variant='body2' textAlign='center'>
                                                Maximum upload size is 1 MB.
                                            </Typography>
                                        </Uploadtext>
                                    </Box>
                                    <Box sx={{ paddingBottom: '1rem' }}>

                                        <Typography variant='body2' textAlign='center'>
                                            Member Since: <b>03 August 2022</b>
                                        </Typography>
                                    </Box>

                                </Cover>
                            </Box>
                        </Grid>
                        <Grid item lg={7} md={7} xs={12} >
                            <Box>
                                <Cover>
                                    <Box marginBottom='10px'>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Full Name
                                        </Typography>
                                        <Box>
                                            <Inputbase type='text' placeholder='Full Name*' />
                                        </Box>
                                    </Box>
                                    <Box marginBottom='10px'>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Username
                                        </Typography>
                                        <Box>
                                            <Inputbase type='text' placeholder='username' />
                                        </Box>
                                    </Box>
                                    <Box marginBottom='10px'>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Password
                                        </Typography>
                                        <Box>
                                            <Inputbase type='password' placeholder='************' />
                                        </Box>
                                    </Box>
                                    <Box marginBottom='10px'>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Confirm Password
                                        </Typography>
                                        <Box>
                                            <Inputbase type='password' placeholder='Confirm Password' />
                                        </Box>
                                    </Box>
                                    <Box marginBottom='10px'>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Email Address
                                        </Typography>
                                        <Box>
                                            <Inputbase type='email' placeholder='Email Address' />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant='body' gutterBottom component='body'>
                                            Wallet Address
                                        </Typography>
                                        <Box>
                                            <Inputbase type='text' placeholder='0xE5D32Ce8785E6E968AE4bA80FC2C5B45cD3C3b0E' />
                                        </Box>
                                        <Box marginY='1rem'>
                                            <Connectbtn type='button'>
                                                Update Info
                                            </Connectbtn>
                                        </Box>
                                    </Box>
                                </Cover>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}


export default AccountUser;