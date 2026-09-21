import React from 'react'
import Cardbtn from '../Buttons/Cardbtn'

const DevCon = () => {
  return (
    <section className="bg-gray-50 px-4 py-4 sm:px-6 sm:py-7 lg:py-12">
      <div className="mx-auto w-full max-w-5xl text-center">
        <h2 className="text-[clamp(1.15rem,3.8vw,2.5rem)] font-bold leading-tight tracking-tight text-slate-900">
          We’re setting a <span className="text-emerald-700">new benchmark</span>
          <br className="hidden sm:block" />
          in weaving to bring modern
          <br className="hidden sm:block" />
          <span className="text-emerald-700">innovation</span> to timeless craftsmanship
        </h2>
      </div>

      <div className="mt-2 flex justify-center sm:mt-4 lg:mt-6">
        <Cardbtn />
      </div>
    </section>
  )
}

export default DevCon