import React from 'react';
import { Link } from 'react-router-dom';
import { LucideFile, DollarSign } from 'lucide-react';


interface SidebarProps {
  open: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {

  return (
    <div className={`fixed top-0 h-screen left-0 border-r border-gray-200 
      transition-all  ${open ? "w-64" : "w-16"}`}>

      <div className='bg-[#fafafa] h-16 w-full mb-6 flex 
        justify-center items-center'>
        <h1 className=" text-center text-2xl font-bold text-primary">{open ? "Admin Panel " : "AP"}</h1>
      </div>

      <div className='bg-[#fafafa]'>
        <ul className='flex flex-col gap-3 p-2 '>
          <li className='flex justify-start items-center gap-2 text-primary font-bold
            p-2'>
            { <LucideFile size={20} /> }
            <Link to='/reques'>{ open && "Leave Requests" } </Link>
          </li>

          <li className='flex justify-start items-center gap-2 text-primary font-bold
            p-2'>
            { <DollarSign size={20} /> }
            <Link to='/request'>{open && "Update price"} </Link>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sidebar;
