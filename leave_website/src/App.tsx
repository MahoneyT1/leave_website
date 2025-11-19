import Navbar from './components/Navbar';
import './App.css';
import './tailwind.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import FAQ from './components/FAQ';
import HowItWorks from './components/HowItWorks';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import AdminLayout from './pages/Admin/AdminLayout';
import UserProfile from './pages/UserProfile';
import PublicLayout from './pages/PublicLayout';

import { Routes, Route, Outlet } from 'react-router-dom';

import PublicRoute from './components/PublicRoute';
import ProtectedAdminRoute from './pages/Admin/ProtectedAdminRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        {/* PUBLIC LAYOUT */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/How" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Route>

        {/* PROTECTED USER ROUTES */}
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/price" element={<Pricing />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>

        {/* PROTECTED ADMIN ROUTES */}
        <Route
          element={
            <ProtectedAdminRoute>
              <Outlet />
            </ProtectedAdminRoute>
          }
        >
          <Route path="/admin" element={<AdminLayout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
