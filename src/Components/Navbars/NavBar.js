import { Box, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import logos from '../../Assets/Images/dextools_logo.svg'
import { Link } from 'react-router-dom';
import Menu from './Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Navbarmain = styled.div`
    background: ${({ theme }) => theme.bg};
    height:70px;
    position:sticky;
    top:0;
    display:flex;
    align-items:center;
    z-index:10;
`

const Menuicon = styled.svg`
    color: ${({ theme }) => theme.text};
    width:30px;
    height:30px;

`
const Logo = styled.div` 
    // display:flex;
    // align-items:center;
    gap:5px; 
`
const Img = styled.img` 
    width:120px
`
const DarkLight = styled.div`
    margin-left: 1rem;
    cursor: pointer;
`
 

const NavBar = ({ darkMode, setDarkMode }) => {

    const [open, setOpen] = useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Navbarmain>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ paddingLeft: '0px !important' }}>
                        <Box display='flex' alignItems='center'>
                            <Box paddingRight='1rem'>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'start',
                                        ...(open && { display: 'none' }),
                                    }}
                                >
                                    <Menuicon>
                                        <MenuIcon />
                                    </Menuicon>
                                </IconButton>
                            </Box>
                            <Link to='/'>
                                <Logo>
                                    {/*<Img src={logos} />*/}
                                    <Typography color='#fff' variant='h4'>
                                        KAI VISION
                                    </Typography>
                                </Logo>

                            </Link>
                        </Box>
                        <Box sx={{ marginLeft: 'auto' }}>
                            <Box>
                                <SearchBar />
                            </Box>
                        </Box>
                        <Box sx={{ marginLeft: '1rem' }}>
                            <Box>
                                <UserProfile />
                            </Box>
                        </Box>
                        <DarkLight onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? <Box display='flex' alignItems='center'>
                                <DarkModeOutlinedIcon sx={{ color: '#f0b90b', gap: '10px', }} /> 
                            </Box> :
                                <Box display='flex' alignItems='center'>
                                    <WbSunnyRoundedIcon sx={{ color: '#17293d', gap: '10px', }} /> 
                                </Box>
                            }
                        </DarkLight>
                        <ConnectButton chainStatus={"none"} />
                    </Toolbar>
                </Container>
            </Navbarmain>
            <Drawer open={open} achor={'left'} onClose={() => setOpen(false)}>
                <Menu />
            </Drawer>
        </>
    )
}

export default NavBar;