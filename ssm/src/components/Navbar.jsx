import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import img from '../assets/icons/bg-ssm.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/dashboard' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Products', to: '/products' }
  ]

  return (
    <>
      <div className='bg-white px-4 py-2 text-black font-sans sm:px-6'>
        <div className='flex items-center justify-between gap-4'>
          <div className='focus:outline-none'>
            <img src={img} className='h-auto w-28 sm:w-40' alt='SSM logo' />
          </div>

          <div className='hidden items-center justify-center space-x-4 m-2 md:flex'>
            <ul className='flex space-x-4'>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink 
                    to={item.to}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-2xl hover:bg-gray-200 ${
                        isActive ? 'bg-gray-200 font-semibold' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <button
            type='button'
            onClick={() => setIsOpen(true)}
            className='rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden'
            aria-label='Open navigation menu'
            aria-expanded={isOpen}
            aria-controls='mobile-navigation'
            title='Open navigation menu'
          >
            <Menu size={24} aria-hidden='true' />
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className='fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile navigation opens from the left and moves toward the right. */}
      <div id='mobile-navigation' className={`fixed left-0 top-0 z-50 h-full w-[min(11rem,calc(50vw-1rem))] -translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className='flex items-start justify-between pl-2 pt-2 pr-2'>
            <nav className='p-4'>
          <ul className='flex flex-col space-y-2'>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink 
                  to={item.to}
                  onClick={() => setIsOpen(false)} // Closes drawer when a link is clicked
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg hover:bg-gray-100 ${
                      isActive ? 'bg-gray-200 font-semibold' : ''
                    }`
                  } >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='rounded-lg p-2 pt-5 text-gray-500 hover:bg-gray-100 hover:text-black'
            aria-label='Close navigation menu'
            title='Close navigation menu'
          >
            <X size={22} aria-hidden='true' />
          </button>
        </div>

       
      </div>
    </>
  )
}

export default Navbar