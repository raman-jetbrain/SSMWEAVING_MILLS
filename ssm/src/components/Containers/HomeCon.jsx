import React from 'react'
import img1 from  '../../assets/Dashboard/img1.webp'
import img2 from '../../assets/Dashboard/img2.webp'
import img3 from '../../assets/Dashboard/img3.webp'
import img4 from '../../assets/Dashboard/img4.webp'

const HomeCon = () => {
return (
    <>
        <div className='flex flex-col items-center justify-center h-200 w-auto bg-gray-50 border-t-8 border-white'>
            <h1 className='text-4xl font-bold '> Why Trust Our Products ? 
                
            </h1>
            <h1 className='text-emerald-700' >
                    The standard we weave into every single product.
                </h1>
            <div className='flex items-center justify-between h-130 w-380 bg-gray-70 pr-20 pl-20 text-white'>
                     <div className='flex flex-col items-center justify-start h-100 w-74 pt-2 bg-white rounded-2xl border-4 hover:shadow-2xl'>
                        <div className='flex items-start bg-amber-100 h-80 w-70 rounded-2xl'>
                            <img src={img1} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='flex flex-row items-center justify-center text-black font-sans pl-2 pt-2'>Commitment to Quality</h5>
                        <p className='text-gray-600 p-2 text-center leading-relaxed '>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>
                    
                    <div className='flex flex-col items-center justify-start h-100 w-74 pt-2 bg-white rounded-2xl border-4 hover:shadow-2xl'>
                        <div className='flex items-start bg-amber-100 h-80 w-70 rounded-2xl'>
                            <img src={img2} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='flex flex-row items-center justify-center text-black font-sans pl-2 pt-2'>Customer-Centric Apporach</h5>
                        <p className='text-gray-600 p-2 text-center leading-relaxed '>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>

                       <div className='flex flex-col items-center justify-start h-100 w-74 pt-2 bg-white rounded-2xl border-4 hover:shadow-2xl'>
                        <div className='flex items-start bg-amber-100 h-80 w-70 rounded-2xl'>
                            <img src={img3} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='flex flex-row items-center justify-center text-black font-sans pl-2 pt-2'>Craftmanship Excellents</h5>
                        <p className='text-gray-600 p-2 text-center leading-relaxed '>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>

                    <div className='flex flex-col items-center justify-start h-100 w-74 pt-2 bg-white rounded-2xl border-4 hover:shadow-2xl'>
                        <div className='flex items-start bg-amber-100 h-80 w-70 rounded-2xl'>
                            <img src={img4} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='flex flex-row items-center justify-center text-black font-sans pl-2 pt-2'>Mericulous Attention to Detail</h5>
                        <p className='text-gray-600 p-2 text-center leading-relaxed '>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>
            </div>
        </div>
    </>
)
}

export default HomeCon