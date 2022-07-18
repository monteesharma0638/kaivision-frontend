import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import TimelineIcon from '@mui/icons-material/Timeline';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';

import logos from '../../Assets/Images/dextools_logo.svg'
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import UserProfile from './UserProfile';
import SearchBar from './SearchBar';
import DashboardHome from '../../Pages/Dashboard/DashboardHome';



const drawerWidth = 200;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    background: '#17293d',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    background: '#17293d',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
        background: '#17293d',
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        background: '#17293d',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        background: '#17293d',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const sideitems = [

    {
        icons: <HomeOutlinedIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Dashboard',
        link: '/dashboard'
    },
    {
        icons: <RocketLaunchIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Live New Pairs',
        link: '/pair-explorer',
    },
    {
        icons: <DashboardCustomizeIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Multi Swap',
        link: '/multi-swap',
    },
    {
        icons: <SwapCallsIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Gainers Losers',
        link: '/gainers-losers',
    },
    {
        icons: <TimelineIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Status',
        link: '/',
    },
    {
        icons: <CandlestickChartOutlinedIcon sx={{ color: '#f0b90b' }} />,
        navtitle: 'Trends',
        link: '/',
    },
]

export default function SideBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}> 
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#0a1929', boxShadow: 'none' }}>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box paddingY='8px' component={Link} to='/'>
                            <img src={logos} atl='logo' className='logowidths' width='100px' />
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
            </AppBar>


            <Drawer variant="permanent" open={open} >
                <Box>
                    <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box component={Link} to='/'>
                            <img src={logos} atl='logo' className='logowidths' width='100px' />
                        </Box>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: '#f0b90b' }} /> : <ChevronLeftIcon sx={{ color: '#f0b90b' }} />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {sideitems.map((items) => (
                            <ListItem key={items} disablePadding sx={{ display: 'block' }}>
                                <Link to={items.link} style={{ textDecoration: 'none' }}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? 'initial' : 'center',
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : 'auto',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            {items.icons}
                                        </ListItemIcon>
                                        <ListItemText primary={items.navtitle} sx={{ opacity: open ? 1 : 0, color: '#fff' }} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer> 
        </Box>
    );
}
