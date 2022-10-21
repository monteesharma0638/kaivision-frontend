import { Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components';
import logos from '../../Assets/Images/dextools_logo.svg'


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import TimelineIcon from '@mui/icons-material/Timeline';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SellIcon from '@mui/icons-material/Sell';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import RedditIcon from '@mui/icons-material/Reddit';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import discordicon from '../../Assets/Images/discord.svg'
import { Link } from 'react-router-dom';


const MainContainer = styled.div`
    flex: 1;
    background: ${({ theme }) => theme.bg};
    height:100vh;
    color: ${({ theme }) => theme.text};
    font-size:14px;
    position:sticky;
    top:0;
`

const Wrapper = styled.div` 
    padding:1rem 1.1rem;
`
const Logo = styled.div` 
    // display:flex;
    // align-items:center;
    gap:5px;
    // margin-bottom:2rem;
`
const Img = styled.img` 
    width:120px
`
const Items = styled.div` 
    display:flex;
    align-items:center;
    gap: 7px;
    cursor: pointer;
    padding: 5.5px 4px;
    background: ${({ theme }) => theme.bgitems} !important;
    margin: 6px 0;
    border-radius: 6px;
`
const Links = styled.a`
    color: ${({ theme }) => theme.text} ;
`

const Hr = styled.hr`
    margin:1rem 0;
    border: 0.3px solid ${({ theme }) => theme.soft}; 
`

const SocialMedia = styled.div`
    display:flex;
    align-items:center;
    gap:4px;
`
const Menuicon = styled.svg`
    color: ${({ theme }) => theme.bgBtns};
    width:30px;
    height:30px;

`

const drawerWidth = 240;


const Menu = ({ darkMode, setDarkMode }) => {

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <MainContainer >
            {/*<Box display='flex' alignItems='center' paddingX='1rem'>
                <Link to='/'>
                    <Logo>
                        <Img src={logos} />
                    </Logo>

                </Link>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <Menuicon onClick={() => setOpen(true)}>
                            <MenuIcon />
                        </Menuicon>
                    </IconButton>
                </Toolbar>
            </Box>
                    <Hr />*/}

            <Wrapper>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Link to='/' style={{ marginRight: '1rem' }}>
                        <Logo>
                            {/*<Img src={logos} />*/}
                            <Typography color='#fff' variant='h4'>
                                KAI VISION
                            </Typography>
                        </Logo>
                    </Link>
                    <IconButton onClick={handleDrawerClose}>
                        <Menuicon>
                            <KeyboardArrowLeftIcon />
                        </Menuicon>
                    </IconButton>
                </Box>
                <Hr />
                {/* menu item*/}
                <Box>
                    <Box>
                        <Link to='/home/bsc'>
                            <Links>
                                <Items>
                                    <HomeOutlinedIcon sx={{ color: '#f0b90b' }} />
                                    Dashboard
                                </Items>
                            </Links>
                        </Link>
                        <Link to='/pair-explorer/bsc/0x5aef2d7f6c2d32cb3603309382615248075aa595'>
                            <Links>
                                <Items>
                                    <DashboardCustomizeIcon sx={{ color: '#f0b90b' }} />
                                    Multi Swap
                                </Items>
                            </Links>
                        </Link>
                        <Link to='/gainers-losers/bsc'>
                            <Links>
                                <Items>
                                    <SwapCallsIcon sx={{ color: '#f0b90b' }} />
                                    Gainers Losers
                                </Items>
                            </Links>
                        </Link>
                        {/* <Hr />
                        <Link to='/stats'>
                            <Links>
                                <Items>
                                    <TimelineIcon sx={{ color: '#f0b90b' }} />
                                    Stats
                                </Items>
                            </Links>
                        </Link>
                        <Link to='/trends'>
                            <Links>
                                <Items>
                                    <CandlestickChartOutlinedIcon sx={{ color: '#f0b90b' }} />
                                    Trends
                                </Items>
                            </Links>
                        </Link> */}
                        <Link to={`/new-listed/bsc`}>
                            <Links>
                                <Items>
                                    <SellIcon sx={{ color: '#f0b90b' }} />
                                    New Listed Pairs
                                </Items>
                            </Links>
                </Link>
                        <Hr />
                        <Link to='/kyc'>
                            <Links>
                                <Items>
                                    <AdminPanelSettingsOutlinedIcon sx={{ color: '#f0b90b' }} />
                                    KYC
                                </Items>
                            </Links>
                        </Link>
                        {/*<Link to='/setting'>
                                <Links>
                                    <Items>
                                        <SettingsIcon sx={{ color: '#f0b90b' }} />
                                        Setting
                                    </Items>
                                </Links>
                            </Link>*/}
                        <Link to='/account'>
                            <Links>
                                <Items>
                                    <AccountCircleRoundedIcon sx={{ color: '#f0b90b' }} />
                                    Your Account
                                </Items>
                            </Links>
                        </Link>
                        {/* <Link to='/report'>
                            <Links>
                                <Items>
                                    <CandlestickChartOutlinedIcon sx={{ color: '#f0b90b' }} />
                                    Report
                                </Items>
                            </Links>
                        </Link> */}

                    </Box>
                    <Hr />
                    <SocialMedia>
                        <Box>
                            <Link to='/'>
                                <Links>
                                    <TwitterIcon sx={{ color: '#f0b90b', cursor: 'pointer' }} />
                                </Links>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Links>
                                    <TelegramIcon sx={{ color: '#f0b90b', cursor: 'pointer' }} />
                                </Links>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Links>
                                    <img src={discordicon} style={{ cursor: 'pointer' }} />
                                </Links>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Links>
                                    <FacebookOutlinedIcon sx={{ color: '#f0b90b', cursor: 'pointer' }} />
                                </Links>
                            </Link>
                        </Box>
                        <Box>
                            <Link to='/'>
                                <Links>
                                    <RedditIcon sx={{ color: '#f0b90b', cursor: 'pointer' }} />
                                </Links>
                            </Link>
                        </Box>

                    </SocialMedia>
                </Box>
                {/* menu item*/}
            </Wrapper>

        </MainContainer>
    )
}

export default Menu;