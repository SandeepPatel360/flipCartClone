import React from 'react'
import {navData} from '../../constants/data'
import { Typography, Box, styled} from '@mui/material'


const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;

`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`
const NavBar = () => {
  return (
    <Box styled={{ background:'#fff'}}>
        <Component>
            {
                navData.map(data =>(
                    <Container>
                        <img src = {data.url} alt = "nav" style={{ width:64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                ))
                
            }
        </Component>
    </Box>
  )
}

export default NavBar
