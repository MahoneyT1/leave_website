import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const PublicLayout: React.FC = () => {
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
