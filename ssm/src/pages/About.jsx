import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductCon from '../components/Containers/ProductCon'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About SSM</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">We create quality textiles that move global markets.</h1>
          </div>

          <div className="space-y-4 text-lg leading-8 text-slate-700">
            <p>
              SSM Weaving & Knitting Mills has been building a dependable exporting identity through modern production,
              consistent quality standards, and responsive service to international buyers.
            </p>
            <p>
              From yarn to finished textile goods, we combine craftsmanship with dependable manufacturing systems that meet
              commercial expectations and delivery commitments.
            </p>
          </div>
        </div>
      </section>

      <ProductCon />
      <Footer />
    </div>
  )
}

export default About
