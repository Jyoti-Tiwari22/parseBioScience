import React, { useState } from 'react'
import logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className = 'parseColor text-white pt-6 w-full fixed z-20' >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 flex justify-between'>
        <div div className = 'flex w-full items-center max-md:justify-start justify-between h-16 max-sm:justify-start' >
          <div className='flex items-center'>
            <div className='hidden md:block'>
              <div className='flex items-baseline space-x-4'>
                <NavLink to='#' className='text-white-300 px-3 py-2 text-sm font-medium'>Technology</NavLink>
                <NavLink to='#' className='text-white-30 px-3 py-2 text-sm font-medium'>Products</NavLink>
                <NavLink to='#' className='text-white-300 px-3 py-2 text-sm font-medium'>Company</NavLink>
              </div>
            </div>
          </div>
          <div className = 'block w-1/5 max-sm:w-2/4' >
            <div className='flex-shrink-0'>
             <img src={logo} alt='Logo' className='w-48' />
            </div>
          </div>
          <div className='md:block hidden'>
            <div className='ml-4 flex items-center md:ml-6'>
              <NavLink to='#' className='text-white-300 px-3 py-2 mr-4 text-sm font-medium'>Resources</NavLink>
              <div className='borderButton navBtnC'>
                <button className='connectButton w-32 text-white px-2 py-2 text-xs font-medium'>
                  Connect with a single - cell expert
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden m-auto'>
          <button onClick = {
            () => setIsMenuOpen(!isMenuOpen)
          }
          className = 'inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white hover:none focus:outline-none focus:none focus:text-white transition duration-150 ease-in-out'>
          {isMenuOpen ? <XIcon className='block h-6 w-6' /> : <MenuIcon className='block h-6 w-6' />}
          </button>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='MenuBack grid p-4'>
            <NavLink to='#' className='text-white-300 px-3 py-2 text-sm font-medium'>Technology</NavLink>
            <NavLink to='#' className='text-white-30 px-3 py-2 text-sm font-medium'>Products</NavLink>
            <NavLink to='#' className='text-white-300 px-3 py-2 text-sm font-medium'>Company</NavLink>
            <NavLink to='#' className='text-white-300 px-3 py-2 mr-4 text-sm font-medium'>Resources</NavLink>
            <button className='connectButton w-36 text-white px-3 py-2 text-xs font-medium'>
              Connect with a single - cell expert
            </button>
          </div>
      </div>
    </nav>
  );
};
export default Navbar