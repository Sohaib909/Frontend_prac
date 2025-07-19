import React, { useState } from 'react';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItem = [
    'Home',
    'About',
    'Service',
    'Contact'
  ];

  return (
    <nav className="bg-white p-4 flex items-center justify-between dark:bg-gray-900 fixed w-full border-b border-gray-200 dark:border-gray-600 z-50 relative"> {/* Added 'relative' */}
      <div className='text-3xl font-extrabold text-gray-900 dark:text-white'>
        Flowbite
      </div >

      
      <div className="hidden md:block md:w-auto" id="navbar-default-desktop"> 
        <ul className='flex md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 dark:border-gray-700 cursor-pointer'>
          {navItem.map((item) => (
            <li
              key={item}
              className={`
                block py-2 px-3 rounded-sm md:p-0
                ${activeMenu === item
                  ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500' 
                  : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' // Inactive classes
                }
              `}
              onClick={() => setActiveMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-4"> 
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Submit
        </button>

        <div className="md:hidden"> 
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
             aria-controls="navbar-default-mobile"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full right-0 w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg shadow-lg mt-2`}
        id="navbar-default-mobile"
      >
        <ul className='flex flex-col p-4 font-medium cursor-pointer'> 
          {navItem.map((item) => (
            <li
              key={item}
              className={`
                block py-2 px-3 rounded-sm
                ${activeMenu === item
                  ? 'text-white bg-blue-700 dark:text-blue-500' 
                  : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white' 
                }
              `}
              onClick={() => {
                setActiveMenu(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;