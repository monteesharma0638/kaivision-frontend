import { Box, Container, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import logos from '../../Assets/Images/dextools_logo.svg'


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

const NavBar = () => {

    
    const [open, setOpen] = useState(false)

    return (
        <Navbarmain>
            <Container maxWidth='xl'>
                <Toolbar sx={{ paddingLeft: '0px !important' }}>
                    <Box display='flex' alignItems='center'>
                        <IconButton
                            color="inherit"
                        >
                            <Menuicon onClick={() => setOpen(true)}>
                                <MenuIcon />
                            </Menuicon>
                        </IconButton>
                        <Logo>
                            <Img src={logos} />
                        </Logo>
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
                </Toolbar>
            </Container>
        </Navbarmain>
    )
}

export default NavBar;