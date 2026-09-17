import React from 'react'
import Cardbtn from '../Buttons/Cardbtn'

const DevCon = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
          We’re setting a <span className="text-emerald-700">new benchmark</span>
          <br />
          in weaving to bring modern
          <br />
          <span className="text-emerald-700">innovation</span> to timeless craftsmanship
        </h2>
      </div>

      <div className="mt-8 flex justify-center">
        <Cardbtn />
      </div>
    </section>
  )
}

export default DevCon