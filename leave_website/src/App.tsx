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
import Overview from './pages/Dashboard/Overview';


function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/faq' element={ <FAQ /> } />
          <Route path='/How' element={ <HowItWorks /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/price' element={ <Pricing/> } />
          <Route path='/dashboard' element={ <Overview /> } />
        </Routes>       
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
