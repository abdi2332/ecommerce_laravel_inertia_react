// resources/js/Components/AdminTopbar.jsx

import React, { useState } from 'react';

const AdminTopbar = () => {
  const [isNotificationsMenuOpen, setNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotificationsMenu = () => {
    setNotificationsMenuOpen(!isNotificationsMenuOpen);
  };

  const closeNotificationsMenu = () => {
    setNotificationsMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setProfileMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('white');
  };

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={() => console.log('Toggle side menu')}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
          </li>
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleNotificationsMenu}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
            {isNotificationsMenuOpen && (
              <ul
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
                aria-label="Notifications"
                aria-orientation="vertical"
                role="menu"
                onClick={closeNotificationsMenu}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a7 7 0 00-7 7v4a7 7 0 0014 0V9a7 7 0 00-7-7zm-1 12a1 1 0 012 0v1a1 1 0 01-2 0v-1zm2-8a1 1 0 00-1 1v4a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
                    </svg>
                    <span className="text-sm">New comment on your post</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a7 7 0 00-7 7v4a7 7 0 0014 0V9a7 7 0 00-7-7zm-1 12a1 1 0 012 0v1a1 1 0 01-2 0v-1zm2-8a1 1 0 00-1 1v4a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
                    </svg>
                    <span className="text-sm">New like on your photo</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleProfileMenu}
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="/path/to/your/profile/image.jpg"
                alt="Profile"
              />
            </button>
            {isProfileMenuOpen && (
              <ul
                className="absolute right-0 w-48 p-2 mt-2 space-y-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
                aria-label="Profile"
                aria-orientation="vertical"
                role="menu"
                onClick={closeProfileMenu}
              >
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 8a3 3 0 016 0v3a3 3 0 01-6 0V8zm-2 7a5 5 0 0110 0H3z"></path>
                    </svg>
                    <span className="text-sm">Your Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a7 7 0 00-7 7v4a7 7 0 0014 0V9a7 7 0 00-7-7zm-1 12a1 1 0 012 0v1a1 1 0 01-2 0v-1zm2-8a1 1 0 00-1 1v4a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
                    </svg>
                    <span className="text-sm">Settings</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    role="menuitem"
                  >
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a7 7 0 00-7 7v4a7 7 0 0014 0V9a7 7 0 00-7-7zm-1 12a1 1 0 012 0v1a1 1 0 01-2 0v-1zm2-8a1 1 0 00-1 1v4a1 1 0 002 0V7a1 1 0 00-1-1z"></path>
                    </svg>
                    <span className="text-sm">Logout</span>
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default AdminTopbar;
