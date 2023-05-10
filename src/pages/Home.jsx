import React from 'react'
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
      <>
          <Navbar />
          <Outlet />
          <Footer />
    </>
  )
}

export default Home