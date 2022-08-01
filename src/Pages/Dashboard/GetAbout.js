import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'

// icons share
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Dadhboardtext = styled.div`
    color: ${({ theme }) => theme.text} ;
`
const Links = styled.a`
    color: ${({ theme }) => theme.text} ;
`

const iconsshare = [
    {
        tools: 'Discord',
        icon: <MailOutlineIcon sx={{ color: '#f0b90b', marginRight: '6px', fontSize: '18px', display: 'flex', alignItems: 'center' }} />,
        links: '/'
    },
    {
        tools: 'Telegram',
        icon: <TelegramIcon sx={{ color: '#f0b90b', marginRight: '6px', fontSize: '18px', display: 'flex', alignItems: 'center' }} />,
        links: '/'
    },
    {
        tools: 'Twitter',
        icon: <TwitterIcon sx={{ color: '#f0b90b', marginRight: '6px', fontSize: '18px', display: 'flex', alignItems: 'center' }} />,
        links: '/'
    },
]



const GetAbout = () => {
    return (
        <div>
            <Box paddingY='1rem'>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item md={8} xs={12}>
                            <Box>
                                <Dadhboardtext>
                                    <Typography variant='h5' fontWeight='400'>
                                        Get news about cryptocurrencies every day!
                                    </Typography>
                                    <Typography variant='h6' fontWeight='400'>
                                        Be part of DEXT Force community! The premium community of kai vision
                                    </Typography>
                                    <Typography variant='body' fontWeight='400' fontSize='14px'>
                                        A group of elite traders and investors focused on DeFi. You can join now our exclusive Discord and get all community benefits including contests, investing tips and advanced market info. There are 3 tiers:
                                    </Typography>
                                </Dadhboardtext>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box>
                                <Dadhboardtext>
                                    <Typography variant='h6' fontWeight='400'>
                                        Follow us on social media!
                                    </Typography>
                                    <Typography variant='body' fontWeight='400' fontSize='14px'>
                                        Follow us on social media and find all you need to know about crypto world!
                                    </Typography>
                                </Dadhboardtext>
                                <Box paddingTop='1rem' display='flex' alignItems='center' flexWrap='wrap'>
                                    {iconsshare.map((icons) => (
                                        <Link to={icons.links} key={icons}>
                                            <Links>
                                                <Typography padding='5px' display='flex' alignItems='center' title={icons.tools}>
                                                    <span>{icons.icon}</span> {icons.tools}
                                                </Typography>
                                            </Links>
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default GetAbout;