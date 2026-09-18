import React from 'react'
import img1 from '../../assets/Products/prod1.jpg'
import img2 from '../../assets/Products/prod2.webp'
import img3 from '../../assets/Products/prod3.jpg'
import img4 from '../../assets/Products/prod4.jpg'
import img5 from  '../../assets/Products/prod5.jpg'
import img6 from '../../assets/Products/prod6.webp'

const products = [
  { name: 'Woven Fabrics', image: img1, detail: 'Premium woven textiles for fashion and industrial use.' },
  { name: 'Knitted Fabrics', image: img2, detail: 'Comfort-first knits for everyday and premium use.' },
  { name: 'Home Textiles', image: img3, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img4, detail: 'High-volume shipments crafted to international standards.' },
   { name: 'Home Textiles', image: img5, detail: 'Durable and elegant fabrics for interiors and hospitality.' },
  { name: 'Export Ready Goods', image: img6, detail: 'High-volume shipments crafted to international standards.' }
]

const ProductCon = () => {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-350">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Our products</p>
          <h3 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Textiles built for performance and trust</h3>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 h-170 w-full">
          {products.map((item) => (
            <div key={item.name} className="overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
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