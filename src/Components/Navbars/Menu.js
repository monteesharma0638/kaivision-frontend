import { Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import logos from '../../Assets/Images/dextools_logo.svg'


import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import TimelineIcon from '@mui/icons-material/Timeline';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import SettingsPowerRoundedIcon from '@mui/icons-material/SettingsPowerRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SellIcon from '@mui/icons-material/Sell';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import RedditIcon from '@mui/icons-material/Reddit';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';

import discordicon from '../../Assets/Images/discord.svg'
import { Link } from 'react-router-dom';


const MainContainer = styled.div`
    flex: 1.1;
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
    margin-bottom:2rem;
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
const DarkLight = styled.div`
    margin-top: 2rem;
    cursor: pointer;
`
const Menuicon = styled.svg`
    color: ${({ theme }) => theme.text};
    width:30px;
    height:30px;

`



const Menu = ({ darkMode, setDarkMode }) => {

    const [open, setOpen] = useState(false)
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
    


    return (
        <MainContainer >
            {/*<Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen} 
                    sx={{ 
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'end',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <Menuicon onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </Menuicon>
                </IconButton>
            </Toolbar>
            <Drawer open={open} achor={'left'} onClose={() => setOpen(false)}>*/}
                <Wrapper>
                    <Link to='/'>
                        <Logo>
                            <Img src={logos} />
                            <Hr />
                        </Logo>
                    </Link>
                    {/* menu item*/}
                    <Box>
                        <Box onClick={() => setOpen(false)}>
                            <Link to='/home'>
                                <Links>
                                    <Items>
                                        <HomeOutlinedIcon sx={{ color: '#f0b90b' }} />
                                        Dashboard
                                    </Items>
                                </Links>
                            </Link>
                            <Link to='/pair-explorer/'>
                                <Links>
                                    <Items>
                                        <DashboardCustomizeIcon sx={{ color: '#f0b90b' }} />
                                        Multi Swap
                                    </Items>
                                </Links>
                            </Link>
                            <Link to='/gainers-losers'>
                                <Links>
                                    <Items>
                                        <SwapCallsIcon sx={{ color: '#f0b90b' }} />
                                        Gainers Losers
                                    </Items>
                                </Links>
                            </Link>
                            <Hr />
                            <Link to='/status'>
                                <Links>
                                    <Items>
                                        <TimelineIcon sx={{ color: '#f0b90b' }} />
                                        Status
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
                            </Link>
                            <Link to='/buying-selling'>
                                <Links>
                                    <Items>
                                        <SellIcon sx={{ color: '#f0b90b' }} />
                                        Buying and Selling
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
                            <Link to='/report'>
                                <Links>
                                    <Items>
                                        <CandlestickChartOutlinedIcon sx={{ color: '#f0b90b' }} />
                                        Report
                                    </Items>
                                </Links>
                            </Link>

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
                        <DarkLight onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? <Box display='flex' alignItems='center'>
                                <DarkModeOutlinedIcon sx={{ color: '#f0b90b', gap: '10px', }} />
                                Dark Theme
                            </Box> :
                                <Box display='flex' alignItems='center'>
                                    <WbSunnyRoundedIcon sx={{ color: '#17293d', gap: '10px', }} />
                                    Light Theme
                                </Box>
                            }
                        </DarkLight>
                    </Box>
                    {/* menu item*/}
                </Wrapper>
            {/*</Drawer>*/}
        </MainContainer>
    )
}

export default Menu;