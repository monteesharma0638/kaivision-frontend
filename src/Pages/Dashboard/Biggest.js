import { Box, Chip, Container, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, Stack, Tooltip, Typography } from '@mui/material';
import React from 'react'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';

// icons share
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';

const Dadhboardtext = styled.h4`
    color: ${({ theme }) => theme.text};
`

const iconsshare = [
    {
        tools: 'Web',
        icon: <DesktopWindowsIcon sx={{ color: '#ddd', marginRight: '6px', cursor: 'pointer', fontSize: '18px' }} />,
    },
    {
        tools: 'Mail',
        icon: <MailOutlineIcon sx={{ color: '#ddd', marginRight: '6px', cursor: 'pointer', fontSize: '18px' }} />,
    },
    {
        tools: 'Telegram',
        icon: <TelegramIcon sx={{ color: '#ddd', marginRight: '6px', cursor: 'pointer', fontSize: '18px' }} />,
    },
    {
        tools: 'Twitter',
        icon: <TwitterIcon sx={{ color: '#ddd', marginRight: '6px', cursor: 'pointer', fontSize: '18px' }} />,
    },
]


const Biggest = () => {
    return (
        <div>
            <Container maxWidth='xl'>
                <Grid container spacing={1}>
                    <Grid item md={12} xs={12}>
                        <Dadhboardtext>
                            <Typography variant='h4' gutterBottom component='div' >
                                Dashboard
                            </Typography>
                        </Dadhboardtext>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item md={4} xs={12}>
                        <Box classes='biggbox' bgcolor='#17293d' borderRadius='12px' padding='1.5rem' height='auto'>
                            <Box>
                                <Box display='flex' alignItems='center'>
                                    <ShowChartOutlinedIcon sx={{ color: '#fff', marginRight: '6px' }} />
                                    <Typography variant='h5' color='#fff' component='div'>
                                        Biggest gainers
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #1
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ETH
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    BSC
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #2
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    KCS
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    LUNA
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #3
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ROSE
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    SOL
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box classes='biggbox' bgcolor='#17293d' borderRadius='12px' padding='1.5rem' height='auto'>
                            <Box>
                                <Box display='flex' alignItems='center'>
                                    <ShowChartOutlinedIcon sx={{ color: '#fff', marginRight: '6px' }} />
                                    <Typography variant='h5' color='#fff' component='div'>
                                        Biggest gainers
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #1
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ETH
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    BSC
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #2
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    KCS
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    LUNA
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #3
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ROSE
                                                </Typography>
                                                <Typography style={{ margin: '0 3px' }} color='#48f00b'>
                                                    /
                                                </Typography>
                                                <Typography variant='body'>
                                                    SOL
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body' color='#f0b90b'>
                                                    8,161,062.94%
                                                </Typography>
                                                <Typography color='#48f00b' variant='body' style={{ marginLeft: '10px' }}>
                                                    8,161,062.94%
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <Box classes='biggbox' bgcolor='#17293d' borderRadius='12px' padding='1.5rem' height='auto'>
                            <Box>
                                <Box display='flex' alignItems='center'>
                                    <RotateLeftOutlinedIcon sx={{ color: '#fff', marginRight: '6px' }} />
                                    <Typography variant='h5' color='#fff' component='div'>
                                        Recently updated socials
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #1
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ETH
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant='body' color='#5d7188' fontSize='14px'>
                                                4 h 22 m 18 s ago
                                            </Typography>
                                        </Box>
                                        <Box display='flex' alignItems='center'>
                                            <Box marginRight='10px'>
                                                {iconsshare.map((icons, index) => (
                                                    <Tooltip key={`${icons}${index}`} title={icons.tools} placement="top-start">
                                                        {icons.icon}
                                                    </Tooltip>
                                                ))}
                                            </Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #2
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    KCS
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant='body' color='#5d7188' fontSize='14px'>
                                                4 h 22 m 18 s ago
                                            </Typography>
                                        </Box>
                                        <Box display='flex' alignItems='center'>
                                            <Box marginRight='10px'>
                                                {iconsshare.map((icons, index) => (
                                                    <Tooltip key={`${icons}${index}`} title={icons.tools} placement="top-start">
                                                        {icons.icon}
                                                    </Tooltip>
                                                ))}
                                            </Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                    <Box display='flex' alignItems='center' justifyContent='space-between' marginTop='10px'>
                                        <Box display='flex' alignItems='center' justifyContent='space-between' >
                                            <Box>
                                                <Typography variant='body' color='#fff'>
                                                    #3
                                                </Typography>
                                            </Box>
                                            <Box marginX='10px'>
                                                <Typography variant='h6' color='#f0b90b'>
                                                    +
                                                </Typography>
                                            </Box>
                                            <Box display='flex' alignItems='center' color='#fff' fontSize='13px'>
                                                <Typography variant='body'>
                                                    ROSE
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Typography variant='body' color='#5d7188' fontSize='14px'>
                                                4 h 22 m 18 s ago
                                            </Typography>
                                        </Box>
                                        <Box display='flex' alignItems='center'>
                                            <Box marginRight='10px'>
                                                {iconsshare.map((icons, index) => (
                                                    <Tooltip key={`${icons}${index}`} title={icons.tools} placement="top-start">
                                                        {icons.icon}
                                                    </Tooltip>
                                                ))}
                                            </Box>
                                            <Tooltip title="Shaow Live Data" placement="top-start">
                                                <WaterfallChartIcon sx={{ color: '#f0b90b', cursor: 'pointer', fontSize: '18px' }} />
                                            </Tooltip>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Biggest;