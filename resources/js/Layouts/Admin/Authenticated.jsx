import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import useDarkModeStore from '@/store/darkModeStore';
const Authenticated = ({ children }) => {
  const [showSidebar, setShowSidebar] = React.useState(false);

  // Zustand store for dark mode
  const darkmode = useDarkModeStore((state) => state.darkmode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);
  

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`min-h-screen flex ${darkmode ? 'dark' : ''} dark:bg-gray-900`}>
      {/* Sidebar */}
      <div
        className={`fixed z-20 inset-y-0 left-0 transform ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-100 ease-in-out md:translate-x-0 md:flex md:flex-shrink-0 ${
          darkmode ? 'dark:bg-zinc-700' : ''
        }`}
      >
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className={` flex-1 flex flex-col dark:bg-gray-800`}>
        <Header
          toggleSidebar={toggleSidebar}
        />
        <main className={`min-h-full mt-14 md:ml-48 my-auto max-w-7xl xxl:w-[1280px] xxl:mx-auto bg-gray-100  dark:bg-gray-800 custom-lg:pl-20`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Authenticated;
