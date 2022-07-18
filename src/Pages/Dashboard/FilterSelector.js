import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import tokening from '../../Assets/Images/pancakeswap.png'
import styled from 'styled-components';

const Dadhboardtext = styled.span`
    color: ${({ theme }) => theme.text};
`

const select = styled.span`
    color: ${({ theme }) => theme.text};
`

const menuitemsd = [
    {
        iconimg: tokening,
        tokenname: 'ETH',
        values: '10',
    },
    {
        iconimg: tokening,
        tokenname: 'BSC',
        values: '20',
    },
    {
        iconimg: tokening,
        tokenname: 'KCS',
        values: '30',
    },
]


const FilterSelector = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div>
            <Box paddingTop='2rem'>
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item md={12} xs={12}>
                            <Box display='flex' alignItems='center'>
                                <Dadhboardtext>
                                    <Typography>
                                        Filter by:
                                    </Typography>
                                </Dadhboardtext>
                                <Box marginLeft='1rem'>
                                    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
                                        <InputLabel color='primary' id="demo-select-small">All exchanges</InputLabel>
                                        <Select
                                            sx={{minWidth: 160, color:'#fff',}}
                                            labelId="demo-select-small"
                                            id="demo-select-small"
                                            value={age}
                                            variant='outlined'
                                            color='primary'
                                            label="All exchanges"
                                            onChange={handleChange}
                                        >
                                            <Box padding='10px'>
                                                All exchanges
                                            </Box>
                                            {menuitemsd.map((tokens) => (
                                                <MenuItem className='filtermenu' key={tokens} value={tokens.values} >
                                                    <Box display='flex' alignItems='center'>
                                                        <Box marginRight='10px' display='flex' alignItems='center'>
                                                            <img src={tokens.iconimg} width='20px' height='20px' style={{ borderRadius: '50px', objectFit: 'cover' }} />
                                                        </Box>
                                                        <Box fontSize='14px'>
                                                            <Typography variant='body' >
                                                                {tokens.tokenname}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default FilterSelector;