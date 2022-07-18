import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography
}from '@mui/material';
import React from 'react'
import './HeaderBar.css'
import MoreIcon from '@mui/icons-material/MoreVert';
import SettingsPowerRoundedIcon from '@mui/icons-material/SettingsPowerRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';


const settings = [ 
    {   useicons: <AccountCircleRoundedIcon sx={{marginRight:'7px',color:'#f0b90b', fontSize:'18px' }} />,
        usersheading: 'Your Account',
    },
    {   useicons: <SettingsIcon sx={{marginRight:'7px',color:'#f0b90b', fontSize:'18px' }} />,
        usersheading: 'Setting',
    },
    {   useicons: <SettingsPowerRoundedIcon sx={{marginRight:'7px',color:'#f0b90b', fontSize:'18px' }} />,
        usersheading: 'Disconnect wallet',
    }
];

const UserProfile = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu

                    sx={{ mt: '45px', }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    className='shadowbox'
                >
                    {settings.map((setting) => (
                        <MenuItem
                            key={setting}
                            onClick={handleCloseUserMenu}
                        >
                            <Typography textAlign="center" display='flex' fontSize='14px' color='#fff'>
                                <span>{setting.useicons}</span>
                                {setting.usersheading}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </div>
    )
}

export default UserProfile;