import React from 'react'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { logoutUser } from '../services';


const Navbar: React.FC = () => {

    const [ isOpen, setIsOpen ] = useState(false);
    const navigate = useNavigate();

    const auth = useAuth();
    const handleLoginLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if ( auth?.user ) {
            logoutUser();
        } else {
            navigate('/login');
        }

    }  

  return (
    //Destop and tablet navbar
      <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50'>

          <div className='w-full md:grid md:grid-cols-12  px-2 h-16 flex
          justify-between items-center'>

            {/* mobile navbar */}
            <div className='w-full flex items-center justify-between 
                h-full md:col-span-4'>
            
                {/* logo div */}
                <div className='flex items-center '>
                    <img src={logo} alt="logo" className='w-10 h-auto ' />
                    <h1 className='text-gunmental font-stardos text-primary
                        text-lg md:text-2xl text-center md:font-bold'>Us Military Leave Department</h1>
                </div>

                <div className='flex justify-center items-center'>
                    <button type='button' onClick={() => setIsOpen(!isOpen)}
                        className='md:hidden'>
                            {isOpen ? <X size={15} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* nav links div */}
            <div className='md:col-span-4 flex justify-center 
                items-center lg:col-span-5'>
                <nav className='flex items-center'>
                    <ul className='gap-4 hidden md:flex text-primary 
                        lg:text-lg lg:gap-5'>
                        <li className='hover:text-sand'><Link to='/'>Home</Link></li>
                        <li className='hover:text-sand'><Link to='/about'>About</Link></li>
                        <li className='hover:text-sand'><Link to='/Faq'>Faq</Link></li>                        
                        <li className='hidden lg:flex hover:text-sand'><Link to='/how'>How it works</Link></li>
                        <li className='hover:text-sand'><Link to='/contact'>Contact</Link></li>
                        <li className='hover:text-sand'><Link to="/profile">Profile </Link></li>

                    </ul>
                </nav>

            </div>

            {/* actions buttons */}
            <div className='hidden md:flex md:col-span-4
                md:justify-center md:gap-5 lg:col-span-3'>

                <button 
                    onClick={handleLoginLogout}
                    className='text-primary rounded-md font-medium 
                    hover:text-sand transition-colors duration-300 
                    md:w-20 md:p-2 lg:h-13 lg:w-25 lg:px-4 text-center 
                    hover:bg-primary'>
                        { auth.user ? <p>Log out</p> : <p> Log in </p>}
                    
                </button>

                { auth?.isAdmin && (
                    <button 
                        className='bg-primary text-white rounded-md
                        font-medium hover:text-sand transition-colors 
                        duration-300 md:px-5  lg:h13 lg:px-4 lg:p-1 text-center'>
                        <Link to='/admin'>Admin Dashboard</Link>
                </button>
                ) }
                
            </div>

            {/* mobile div */}      
            {isOpen && (
                <nav className='absolute top-16 h-auto w-[100px] right-2 
                    flex flex-col items-center md:hidden flex-column
                    gap-2 lg:gap-3 bg-white px-4 py-2 rounded-md shadow-md'>
                    <ul>
                        <li className='p-1 font-semibold hover:text-sand'><a href="/">Home</a></li>
                        <li className='p-1 font-semibold hover:text-sand'><a href="/about">About</a></li>
                        <li className='p-1 font-semibold hover:text-sand'><Link to="/Fag">Fag</Link></li>
                        <li className='p-1 font-semibold hover:text-sand'><Link to="/how">How</Link></li>
                        <li className='p-1 font-semibold hover:text-sand'><Link to="/contact">Contact</Link></li>
                        <li className='p-1 font-semibold hover:text-sand'><Link to="/profile">Profile</Link></li>
                        <li className='p-1 font-semibold hover:text-sand'><Link to="/admin">Admin</Link></li>
                        <li className='hover:text-sand'><Link to="/login">Profile </Link></li>

                    </ul>  
                </nav>
            )}

        </div>

      </div>
  )
}

export default Navbar;
