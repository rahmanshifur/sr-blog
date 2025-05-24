import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@mui/material'
const UserLayout = () => {
  return (
    <>
    <NavBar/>
    <Box sx={{background: "#f5f5f5", pb:2}}>
      <Outlet/>
    </Box>
      <Footer/>
    </>
  )
}

export default UserLayout