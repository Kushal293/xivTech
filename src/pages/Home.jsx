import React from 'react'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
      <>
          <Navbar />
          <Outlet />
    </>
  )
}

export default Home