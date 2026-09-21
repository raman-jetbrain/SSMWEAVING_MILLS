import React from 'react'
import img1 from  '../../assets/Dashboard/img1.webp'
import img2 from '../../assets/Dashboard/img2.webp'
import img3 from '../../assets/Dashboard/img3.webp'
import img4 from '../../assets/Dashboard/img4.webp'

const HomeCon = () => {
return (
    <>
        <div className='flex w-full flex-col items-center justify-center border-t-8 border-white bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:py-20'>
            <h1 className='text-center text-3xl font-bold sm:text-4xl lg:text-5xl'> Why Trust Our Products ?
                
            </h1>
            <h1 className='mt-3 text-center text-sm text-emerald-700 sm:text-base' >
                    The standard we weave into every single product.
                </h1>
                     <div className='grid w-full max-w-7xl grid-cols-2 gap-3 pt-8 text-white sm:gap-6 lg:grid-cols-4 lg:pt-10'>
                                      <div className='flex h-full flex-col items-center justify-start rounded-2xl border-4 bg-white p-2 hover:shadow-2xl'>
                                          <div className='aspect-4/3 w-full rounded-2xl bg-amber-100'>
                            <img src={img1} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='px-1 pt-3 text-center font-sans text-sm font-semibold text-black sm:px-2 sm:text-lg'>Commitment to Quality</h5>
                        <p className='p-1 text-center text-xs leading-relaxed text-gray-600 sm:p-2 sm:text-base'>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>
                    
                    <div className='flex h-full flex-col items-center justify-start rounded-2xl border-4 bg-white p-2 hover:shadow-2xl'>
                        <div className='aspect-4/3 w-full rounded-2xl bg-amber-100'>
                            <img src={img2} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='px-1 pt-3 text-center font-sans text-sm font-semibold text-black sm:px-2 sm:text-lg'>Customer-Centric Apporach</h5>
                        <p className='p-1 text-center text-xs leading-relaxed text-gray-600 sm:p-2 sm:text-base'>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>

                       <div className='flex h-full flex-col items-center justify-start rounded-2xl border-4 bg-white p-2 hover:shadow-2xl'>
                        <div className='aspect-4/3 w-full rounded-2xl bg-amber-100'>
                            <img src={img3} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='px-1 pt-3 text-center font-sans text-sm font-semibold text-black sm:px-2 sm:text-lg'>Craftmanship Excellents</h5>
                        <p className='p-1 text-center text-xs leading-relaxed text-gray-600 sm:p-2 sm:text-base'>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>

                    <div className='flex h-full flex-col items-center justify-start rounded-2xl border-4 bg-white p-2 hover:shadow-2xl'>
                        <div className='aspect-4/3 w-full rounded-2xl bg-amber-100'>
                            <img src={img4} alt="" className='relative w-full h-full object-cover rounded-2xl' />
                         </div>
                        <h5 className='px-1 pt-3 text-center font-sans text-sm font-semibold text-black sm:px-2 sm:text-lg'>Mericulous Attention to Detail</h5>
                        <p className='p-1 text-center text-xs leading-relaxed text-gray-600 sm:p-2 sm:text-base'>Precision in every stitch,We delivers uncompromising quality & ensuring excellence in every thread</p>
                    </div>
            </div>
        </div>
    </>
)
}

export default HomeCon