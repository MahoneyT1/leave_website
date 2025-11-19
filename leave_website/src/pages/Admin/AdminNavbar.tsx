import React from 'react';
import { PanelLeftOpen } from 'lucide-react';

interface AdminNavbarProps {
  toggle: () => void;
}


const AdminNavbar: React.FC<AdminNavbarProps> = ({ toggle }) => {
  return (
    <div className='px-8 mx-auto h-18 flex items-center w-full 
      
      '>

      <div className='border-b border-secondary w-full'>
          <button onClick={ toggle } className=''>
          <PanelLeftOpen size={20} />
          </button>
        </div>
      
    </div>
  )
}

export default AdminNavbar;
