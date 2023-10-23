import React from 'react'
import { Navbar as Nav } from 'flowbite-react';

const Navbar = () => {
  return (
    <nav className='min-w-full bg-white h-[10vh]  md:shadow-md sticky shadow-lg'>
        <div className='flex justify-between mx-auto p-4'>
          <a href='#'>
            <img src="/logo.jpg" className='h-10' alt="The Legal Arch Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" className='flex justify-center text-sm text-primary-dark md:hidden p-2 w-10 h-10 items-center focus:outline-none focus:ring-2 focus:ring-primary-lighter' aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>
          <div className='hidden md:block md:w-auto' id="navbar-default">
            <ul className='font-medium md:flex md:items-center text-primary-dark md:gap-4 p-4 md:p-0 mt-1'>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
