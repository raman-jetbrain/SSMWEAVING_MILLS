import React from 'react'
import img1 from '../../assets/Dashboard/img1.webp'
import img2 from '../../assets/Dashboard/img2.webp'
import img3 from '../../assets/Dashboard/img3.webp'
import img4 from '../../assets/Dashboard/img4.webp'

const products = [
  { name: 'Woven Fabrics', image: img1, detail: 'Premium woven textiles for fashion and industrial use.' },
  { name: 'Knitted Fabrics', image: img2, detail: 'Comfort-first knits for everyday and premium use.' },
  { name: 'Home Textiles', image: img3, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img4, detail: 'High-volume shipments crafted to international standards.' }
]

const ProductCon = () => {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Our products</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Textiles built for performance and trust</h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h4 className="mb-2 text-xl font-bold text-slate-900">{item.name}</h4>
                <p className="text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCon