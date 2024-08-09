import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Authenticated = ({ children }) => {
  return (
<div className='h-screen'> 
        <Header />
        <div className='mt-10'>
      <Sidebar  />
      </div>
      <div>
        <main>
          {children}
        </main>
      </div>
      </div>
  );
};

export default Authenticated;
