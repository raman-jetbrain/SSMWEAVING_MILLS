import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCon from '../components/Containers/ProductCon'
import heroImage from '../assets/Banners/Maniquin.png'
import Hero from '../components/Hero'
import SeriviceHero from '../components/SeriviceHero'

const productList = [
  'Cotton woven fabrics',
  'Knitted garments fabric',
  'Home textile materials',
  'Industrial textile products',
  'Export-ready finished goods',
  'Custom textile solutions'
]

const Products = () => {
  const [visibleCapabilities, setVisibleCapabilities] = React.useState(new Set())
  const capabilityRefs = React.useRef([])

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const index = Number(entry.target.dataset.capability)
          setVisibleCapabilities((current) => {
            if (current.has(index)) return current
            return new Set(current).add(index)
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2 }
    )

    capabilityRefs.current.filter(Boolean).forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <SeriviceHero />
      <ProductCon />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div
          ref={(element) => { capabilityRefs.current[0] = element }}
          data-capability="0"
          className={`product-reveal mb-10 text-center ${visibleCapabilities.has(0) ? 'product-reveal--visible' : ''}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Capabilities</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900">A complete textile supply partner</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productList.map((product, index) => (
            <div
              ref={(element) => { capabilityRefs.current[index + 1] = element }}
              data-capability={index + 1}
              key={product}
              className={`product-reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${visibleCapabilities.has(index + 1) ? 'product-reveal--visible' : ''}`}
              style={{ transitionDelay: `${Math.min(index * 70, 350)}ms` }}
            >
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