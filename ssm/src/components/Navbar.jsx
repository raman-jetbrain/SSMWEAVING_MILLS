import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/bg-ssm.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', to: '/dashboard' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
    { label: 'Products', to: '/products' }
  ]

  return (
    <>
      <div className='bg-white text-black font-sans py-2 h-17'>
        <div className='flex items-center justify-between'>
          {/* Logo click opens drawer */}
          <button 
            onClick={() => setIsOpen(true)} 
            className='focus:outline-none cursor-pointer'
          >
            <img src={img} className='w-40 h-auto' alt='SSM logo' />
          </button>

          <div className='flex justify-center items-center space-x-4 m-2'>
            <ul className='flex space-x-4 w-130'>
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
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-40 transition-opacity'
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-over Drawer */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className='text-lg font-semibold'>Wellcome to..
            <h1 className='text-4xl text-emerald-800 font-bold font-sans-'>SSM ERP</h1>
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className='text-gray-500 hover:text-black font-bold p-1'
          >
            ✕
          </button>
        </div>

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
      </div>
    </>
  )
}

export default Navbar