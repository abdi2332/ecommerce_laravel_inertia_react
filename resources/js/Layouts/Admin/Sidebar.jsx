import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import home from "../../../images/home-3 1 (1).png";
import customers from "../../../images/file-shared 1.png";
import transaction from "../../../images/transactions 1.png";
import shop from "../../../images/present 1.png";
import products from "../../../images/file-shared 1.png";
import help from "../../../images/help_outline 2.png";
import logout from "../../../images/logout 1.png";
import downarrow from "../../../images/keyboard_arrow_down 2.png";

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-full w-48 flex flex-col justify-between shadow-bottom-only dark:bg-gray-900 bg-white dark:border-b-slate-500">
      <nav className="flex flex-col">
        <div className="py-6 px-2">
          <div className="relative flex items-center text-gray-800 text-xl font-bold no-underline">
            <svg
              className="fill-current dark:text-white text-gray-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
            </svg>
            <span className="dark:text-white">NORDICS</span>
            {showSidebar && (
              <span
                className="absolute right-3 my-auto text-sm cursor-pointer md:hidden dark:text-white"
                onClick={toggleSidebar}
              >
                X
              </span>
            )}
          </div>
        </div>

        {/* Sidebar Links */}
        {[ 
          { href: route('admin.dashboard'), icon: home, label: "Home" },
          { href: route('manage'), icon: products, label: "Invite" },
          {
            id: "items",
            icon: products,
            label: "Items",
            isDropdown: true,
            items: [{ href:route('products.index'), label: "Add Item" }],
          },
          {
            id: "customers",
            icon: customers,
            label: "Customers",
            isDropdown: true,
            items: [
              { href: "#", label: "All Customers" },
              { href: "#", label: "Add Customer" },
            ],
          },
          { href: "#", icon: transaction, label: "Transaction" },
          { href: "#", icon: shop, label: "Shop" },
        ].map((link, index) =>
          link.isDropdown ? (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(link.id)}
                className="py-3 px-3 rounded flex w-full justify-between items-center dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-white text-gray-800"
              >
                <div className="flex items-center">
                  <img
                    src={link.icon}
                    className="h-6 my-auto mr-3 dark:filter dark:brightness-0 dark:invert"
                    alt={`${link.label}-icon`}
                  />
                  <span className="font-lato text-xs">{link.label}</span>
                </div>
                <img
                  src={downarrow}
                  className={`h-6 transform ${openDropdown === link.id ? "rotate-180" : ""} dark:filter dark:brightness-0 dark:invert`}
                  alt="downarrow"
                />
              </button>
              {/* Dropdown Items */}
              {openDropdown === link.id && (
                <div className="mt-1 space-y-1 dark:text-white text-gray-800">
                {link.items.map((item, subIndex) => (
                  <Link
                    key={subIndex}
                    href={item.href}
                    className="block py-4 rounded-md font-lato text-xs pl-10 my-auto dark:hover:bg-gray-800 hover:bg-gray-100"
                  >
                  {item.label} 
                  </Link>
                ))}

              </div>
              
              )}
            </div>
          ) : (
            <Link
              key={index}
              className="relative py-3 px-3 rounded flex dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-white text-gray-800"
              href={link.href}
            >
              <img
                src={link.icon}
                className="h-6 my-auto mr-3 dark:filter dark:brightness-0 dark:invert"
                alt={`${link.label}-icon`}
              />
              <span className="font-lato text-xs my-auto ">{link.label}</span>
            </Link>
          )
        )}
      </nav>

      {/* Bottom Links */}
      <div className="pr-1">
        <Link
          className="py-3 px-3 rounded flex dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-white text-gray-800"
          href="#"
        >
          <img
            src={help}
            className="h-6 my-auto mr-3 dark:filter dark:brightness-0 dark:invert"
            alt="help-icon"
          />
          <span className="font-lato text-xs my-auto">Help</span>
        </Link>
        <Link
          className="py-3 px-3 rounded flex dark:hover:bg-gray-800 hover:bg-gray-100 dark:text-white text-gray-800"
          href="#"
        >
          <img
            src={logout}
            className="h-6 my-auto mr-3 dark:filter dark:brightness-0 dark:invert"
            alt="logout-icon"
          />
          <span className="font-lato text-xs my-auto">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
