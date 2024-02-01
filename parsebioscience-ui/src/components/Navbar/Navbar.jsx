import React from 'react'
import logo from '../../assets/images/Logo.png';

const Navbar = () => {
  return (
    <header className = "parseColor text-white pt-6 w-full fixed" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-white-300 px-3 py-2 text-sm font-medium">Technology</a>
                <a href="#" className="text-white-30 px-3 py-2 text-sm font-medium">Products</a>
                <a href="#" className="text-white-300 px-3 py-2 text-sm font-medium">Company</a>
              </div>
            </div>
          </div>
          <div className = 'block w-1/5' >
            <div className="flex-shrink-0">
             <img src={logo} alt='Logo' className='w-48' />
            </div>
          </div>
          <div className="block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href='#' className="text-white-300 px-3 py-2 mr-4 text-sm font-medium">Resources</a>
              <button className="connectButton w-32 text-white px-3 py-2 text-xs font-medium">
                Connect with a single - cell expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar