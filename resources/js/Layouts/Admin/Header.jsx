import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";
import searchicon from "../../../images/Group.png";
import notification from "../../../images/alarm 1.png";
import humberger from "../../../images/hamburger-menu.png";
import sun from "../../../images/Sun.png";
import moon from "../../../images/Moon.png";
import useDarkModeStore from "@/store/darkModeStore"; // Import Zustand store

const Header = ({ toggleSidebar, showSidebar }) => {
  const darkmode = useDarkModeStore((state) => state.darkmode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <nav
      id="header"
      className={`fixed w-full top-0 right-0 py-3 shadow-bottom-only md:w-[calc(100%-192px)] z-10 bg-white dark:bg-gray-900 text-black dark:text-gray-100 dark:border-black`}
    >
      <div className="w-full flex items-center justify-between px-2">
        {/* Sidebar Toggle */}
        <div className="md:hidden">
          <img
            onClick={toggleSidebar}
            className="h-6 cursor-pointer dark:invert dark:brightness-0"
            src={humberger}
            alt="Menu"
          />
        </div>

        {/* Search Bar */}
        <div className="w-2/4 flex justify-center bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-300 rounded-md ml-1">
          <img
            className="hidden xxs:block rounded-md my-auto h-3.5 sm:h-4 pl-1 dark:invert dark:brightness-0"
            src={searchicon}
            alt="Search Icon"
          />
          <input
            className="hidden xxs:block font-serif text-xs w-full rounded-md border-none bg-transparent focus:ring-0 dark:placeholder-gray-400"
            type="text"
            placeholder="Search items"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Dark Mode Toggle */}
          <div
            className="pr-4 pl-1 hidden smx:inline-block cursor-pointer"
            onClick={toggleDarkMode}
          >
            <img
              className="h-4 xs:h-5 dark:invert dark:brightness-0"
              src={darkmode ? sun : moon}
              alt="Dark Mode Toggle"
            />
          </div>

          {/* Notification Icon */}
          <div className="pr-4 pl-1 hidden xxs:inline-block cursor-pointer">
            <img
              className="h-4 xs:h-5 dark:invert dark:brightness-0"
              src={notification}
              alt="Notification Icon"
            />
          </div>

          {/* User Dropdown */}
          <Dropdown>
            <Dropdown.Trigger>
              <button className="flex  items-center focus:outline-none">
                <svg
                  className="fill-current text-gray-800 dark:text-gray-300 w-5 xs:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
                <svg
                  className="fill-current text-gray-800 dark:text-gray-300 w-5 xs:w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l-4-4h8l-4 4z" />
                </svg>
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content className="bg-white dark:bg-gray-800 rounded-md shadow-md">
              <Dropdown.Link
                href={route("profile.edit")}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
              >
                Profile
              </Dropdown.Link>
              <Dropdown.Link
                href="/logout"
                method="post"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"
              >
                Log Out
              </Dropdown.Link>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Header;
