import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/AuthProvider.tsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer position='top-right' autoClose={3000} />
      <BrowserRouter>
        <AuthProvider>      
          <App />
        </AuthProvider>
      </BrowserRouter>
    
  </StrictMode>,
)
