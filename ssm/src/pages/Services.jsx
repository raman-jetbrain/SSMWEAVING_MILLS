import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SeriviceHero from '../components/SeriviceHero'

const services = [
  'Bulk textile manufacturing',
  'Garment and knitting production',
  'Quality control and testing',
  'Packaging and export support',
  'Custom manufacturing support',
  'Global buyer coordination'
]

const Services = () => {
  return (
    <>
      <Navbar />
      <SeriviceHero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Support that helps your business scale</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
              <div className="mb-4 h-2 w-12 rounded-full bg-emerald-400" />
              <h2 className="text-xl font-semibold">{service}</h2>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services
