import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCon from '../components/Containers/ProductCon'

const productList = [
  'Cotton woven fabrics',
  'Knitted garments fabric',
  'Home textile materials',
  'Industrial textile products',
  'Export-ready finished goods',
  'Custom textile solutions'
]

const Products = () => {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">SSM product range</p>
        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-6xl">Textiles made for dependable performance</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Explore our woven, knitted, home textile, and export-ready product capabilities.
        </p>
      </section>

      <ProductCon />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Capabilities</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">A complete textile supply partner</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productList.map((product) => (
            <div key={product} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-2 w-14 rounded-full bg-emerald-600" />
              <h2 className="text-xl font-semibold text-slate-900">{product}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Built with consistent quality checks and export-focused production support.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Products