import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import './tailwind.css';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Home/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
