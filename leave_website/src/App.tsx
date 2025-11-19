import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './tailwind.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import AdminLayout from './pages/Admin/AdminLayout';
import { Outlet } from 'react-router-dom';
import PublicLayout from './pages/PublicLayout';


function App() {

  return (
    <>
     {/* public layout */}
     <Routes>
        <Route element={<PublicLayout />} > 
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/How' element={<HowItWorks />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/price' element={<Pricing />} />
        </Route>

        <Route element={ <AdminLayout/> } >
          <Route path='/admin' element={<AdminLayout/>} />
        </Route>
     

     {/* Admin route */}

    </Routes>
    </>
  )
}

export default App
