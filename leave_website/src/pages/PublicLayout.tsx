import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import PublicRoute from '../components/PublicRoute';



const PublicLayout = () => {
  return (
    <>
        <header>
            <Navbar/>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <Footer/>
        </footer>
      
    </>
  )
}

export default PublicLayout;
