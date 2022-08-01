import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import StatsData from './StatsData';


const Statsdiv = styled.div`
    height:100vh;
`
 
const Inputbase = styled.input`
    width: 100%;
    border-radius: 50px;
    padding: 10px 20px;
    border: 1px solid ${({ theme }) => theme.textSoft};
    background: transparent;
    color: ${({ theme }) => theme.text};
`

const StatsMain = () => {
  return (
    <Statsdiv>
        <Box>
            <Container maxWidth='xl'>
                <Grid container spacing={1} alignItems='center'>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Box>
                            <Typography variant='h3' gutterBottom component='h3' fontWeight='300'>
                                Stats
                            </Typography>
                            <Typography variant='body' component='span' fontWeight='300'>
                            Check the current trends (hot pairs) for any exchange. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Box>
                            <Inputbase type='search' placeholder='Search exchange....' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <StatsData />
    </Statsdiv>
  )
}

export default StatsMain;