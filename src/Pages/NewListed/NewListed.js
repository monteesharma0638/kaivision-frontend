import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import NewListedTableData from './NewListedTableData';

const Gainersl = styled.div`
  height:100%;
`

const NewListed = () => {
  return (
    <div>
      <Gainersl>
        <Box>
          <Container maxWidth='xl'>
            <Grid container spacing={1}>
              <Grid item md={12}>
                <Box>
                  <Typography variant='h4' gutterBottom component='h4' fontWeight='400'>
                    New Listed Pairs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box>
          <NewListedTableData />
        </Box>
      </Gainersl>
    </div>
  )
}

export default NewListed;