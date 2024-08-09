import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';

const Sidebar = () => {

  return (
<>
      
      {/* Sidebar */}
      <div className=' w-1/5 py-5 max-h-screen border'> 
        <nav className="flex flex-col">
          <Link className="py-3 px-3 text-gray-800 hover:bg-gray-100 rounded text-sm md:text-base lg:text-base " href="#">Dashboard</Link>
          <Link className="py-3 px-3 text-gray-800 hover:bg-gray-100 rounded text-sm md:text-base lg:text-base " href="#">Products</Link>
          <Link className="py-3 px-3 text-gray-800 hover:bg-gray-100 rounded text-sm md:text-base lg:text-base " href="#">Orders</Link>
          <Link className="py-3 px-3 text-gray-800 hover:bg-gray-100 rounded text-sm md:text-base lg:text-base " href="#">Customers</Link>
          {/* Add more links as needed */}
        </nav>
      </div>
      </>
  );
};

export default Sidebar;
