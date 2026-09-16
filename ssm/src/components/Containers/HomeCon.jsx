import React from 'react'
import img1 from  '../../assets/Dashboard/img1.webp'
import img2 from '../../assets/Dashboard/img2.webp'
import img3 from '../../assets/Dashboard/img3.webp'
import img4 from '../../assets/Dashboard/img4.webp'

const HomeCon = () => {
return (
    <>
        <div className='flex flex-col items-center justify-center h-200 w-auto bg-gray-50'>
            <h1 className='text-4xl font-bold '> Why Trust Our Products ? 
                
            </h1>
            <h1 className='text-emerald-700' >
                    The standard we weave into every single product.
                </h1>
            <div className='flex items-center justify-between h-130 w-380 bg-gray-70 pr-20 pl-20 text-white'>
                    <div className='flex flex-col items-start justify-start h-100 w-70 bg-white rounded-2xl '>
                        <div className='flex items-start bg-amber-100 h-70 w-70 rounded-2xl'>
                            <img src={img1} alt="" className='w-full h-full object-cover rounded-2xl' />
                        </div>
                        <h5 className='flex flex-row items-center justify-center text-black font-extralight '>Commitment to Quality</h5>
                    </div>
                    
                    <div className='flex items-start justify-center h-100 w-70 bg-white rounded-2xl '>
                        <div className='flex items-start bg-amber-100 h-70 w-70'>
                            <img src={img2} alt="" className='w-full h-full object-cover rounded-2xl' />
                        </div>
                    </div>
                        <div className='flex items-start justify-center h-100 w-70 bg-white rounded-2xl '>
                            <div className='flex items-start bg-amber-100 h-70 w-70'>
                                <img src={img3} alt="" className='w-full h-full object-cover rounded-2xl' />
                            </div>
                        </div>
                        <div className='flex items-start justify-center h-100 w-70 bg-white rounded-2xl '>
                            <div className='flex items-start bg-amber-100 h-70 w-70'>
                                <img src={img4} alt="" className='w-full h-full object-cover rounded-2xl' />
                            </div>
                        </div>
            </div>
        </div>
    </>
)
}

export default HomeCon