import React from 'react'
import Cardbtn from '../Buttons/Cardbtn'

const DevCon = () => {
  return (
    <>
    <div className='flex justify-center items-center bg-gray-50 text-black font-sans text-5xl p-4'>
        <div className='flex justify-center items-center p-5'>
            <h1>
                We’re setting a  <strong > New benchmark </strong><br/> in weaving  to bring modern  <br/> 
               <strong>innovation</strong> to timeless <br/> craftsmanship 
            </h1>
        </div>
    </div>
     <div className='flex items-center justify-end p-1 bg-gray-50'>
                <Cardbtn/>
    </div>
    </>
    
  )
}

export default DevCon