import React from 'react'
import img from '../assets/bg-ssm.png'

const Navbar = () => {
  return (
  <>
     <div  className='bg-white text-black font-sans py-2  h-17     '>
        <div className='flex items-center justify-between'>
            <img src={img} className='w-40 h-auto'/>
             <div className='flex justify-center items-center space-x-4 m-2'>
             <ul className='flex space-x-4 w-130'>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-2xl' >Home</li>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-2xl'>About</li>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-2xl'>Services</li> 
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-2xl'>Products</li>
                <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer rounded-2xl'>Contact</li> 
             </ul>
        </div>
        </div>
       
        
     </div>
  </>
  )
}

export default Navbar
