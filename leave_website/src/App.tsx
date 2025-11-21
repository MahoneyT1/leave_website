import './App.css';
import './tailwind.css';
import Home from './pages/Home';
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
import ForgotPassword from './pages/ForgotPassword';
import { Routes, Route, Outlet } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import ProtectedAdminRoute from './pages/Admin/ProtectedAdminRoute';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRequestHandle from './pages/Admin/AdminRequestHandle';



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
          <Route path='/forgot-password' element={<ForgotPassword />} />
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
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />   {/* This is the admin dashboard layout */}
            </ProtectedAdminRoute>
          }
        >
          {/* Nested admin routes */}
        </Route>
        <Route path="handle-request" element={<AdminRequestHandle />} />

        
      </Routes>
    </>
  );
}

export default App;
