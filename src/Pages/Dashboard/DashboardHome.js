import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import Biggest from './Biggest';
import FilterTables from './FilterTables';
import FilterSelector from './FilterSelector';
import GetAbout from './GetAbout';
import styled from 'styled-components';

const Dhasbox = styled.div`
    // background: ${({ theme }) => theme.bgitems}; 
`



const DashboardHome = () => {
    
    return (
        <Dhasbox>
            <Box component="main">
                <Biggest />
                <FilterSelector />
                <FilterTables />
                <GetAbout />
            </Box>
        </Dhasbox>
    )
}

export default DashboardHome;