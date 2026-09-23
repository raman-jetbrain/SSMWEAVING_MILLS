import React from 'react'
import austriaImg from '../../assets/country_img/astria.webp'
import australiaImg from '../../assets/country_img/australia.webp'
import franceImg from '../../assets/country_img/france.webp'
import greeceImg from '../../assets/country_img/geece.jpg'
import italyImg from '../../assets/country_img/italy.webp'
import germanyImg from '../../assets/country_img/germany.webp'
import hongKongImg from '../../assets/country_img/hong-kong.webp'
import israelImg from '../../assets/country_img/israel.webp'
import kuwaitImg from '../../assets/country_img/kuwait.webp'
import netherlandsImg from '../../assets/country_img/netherlands.webp'
import polandImg from '../../assets/country_img/poland.webp'
import saudiArabiaImg from '../../assets/country_img/soudi.webp'
import spainImg from '../../assets/country_img/spain.webp'
import sriLankaImg from '../../assets/country_img/sri-lanka.webp'
import swedenImg from '../../assets/country_img/swedan.webp'
import switzerlandImg from '../../assets/country_img/switcherland.jpg'
import tanzaniaImg from '../../assets/country_img/tanzania.webp'
import usaImg from '../../assets/country_img/usa.webp'

const offices = [
  { city: 'Austria', street: '', postal: '', image: austriaImg, button: 'Contact →' },
  { city: 'Australia', street: '', postal: '', image: australiaImg, button: 'Contact →' },
  { city: 'France', street: '', postal: '', image: franceImg, button: 'Contact →' },
  { city: 'Greece', street: '', postal: '', image: greeceImg, button: 'Contact →' },
  {
    city: 'Srilanka',
    street: 'Antinkatu 1',
    postal: '00100 Helsinki',
    image: sriLankaImg,
    button: 'Contact →'
  },
  {
    city: 'Germany',
    street: '36-40 York Wy',
    postal: 'London, N1 9AB',
    image: germanyImg,
    button: 'Contact →'
  },
  {
    city: 'Italy',
    street: '36-40 York Wy',
    postal: 'London, N1 9AB',
    image: italyImg,
    button: 'Contact →'
  },
  { city: 'Hong Kong', street: '', postal: '', image: hongKongImg, button: 'Contact →' },
  { city: 'Israel', street: '', postal: '', image: israelImg, button: 'Contact →' },
  { city: 'Kuwait', street: '', postal: '', image: kuwaitImg, button: 'Contact →' },
  { city: 'Netherlands', street: '', postal: '', image: netherlandsImg, button: 'Contact →' },
  { city: 'Poland', street: '', postal: '', image: polandImg, button: 'Contact →' },
  { city: 'Saudi Arabia', street: '', postal: '', image: saudiArabiaImg, button: 'Contact →' },
  { city: 'Spain', street: '', postal: '', image: spainImg, button: 'Contact →' },
  { city: 'Sweden', street: '', postal: '', image: swedenImg, button: 'Contact →' },
  { city: 'Switzerland', street: '', postal: '', image: switzerlandImg, button: 'Contact →' },
  { city: 'Tanzania', street: '', postal: '', image: tanzaniaImg, button: 'Contact →' },
  { city: 'United States', street: '', postal: '', image: usaImg, button: 'Contact →' }
]

const CurrentProCon = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-12 lg:pr-16 border-t-8 border-white">
      <h1 className="flex items-center justify-center pb-10 text-center text-4xl font-sans font-semibold sm:text-5xl lg:pb-15 lg:text-6xl">
        Our Current Work Projects
      </h1>

      <div className="mx-auto flex w-full max-w-375 flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-155 pb-10 text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-slate-900 lg:w-[34%] lg:shrink-0">
          <p>
            You actually scroll this far?<br />
            Respect. Here is what we are building right now
          </p>
          <span className="mt-4 inline-block h-0.75 w-40 bg-slate-900" />
        </div>

        <div className="countries-marquee w-full overflow-hidden lg:w-[62%] lg:pr-8">
          <div className="countries-marquee__track flex w-max gap-12">
            {[...offices, ...offices].map((office, index) => (
              <div key={`${office.city}-${index}`} className="flex w-[250px] shrink-0 flex-col items-start gap-4">
                <div className="relative h-55 w-62.5 overflow-hidden rounded-3xl shadow-sm">
                  <img
                    src={office.image}
                    alt={`${office.city} country project`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-[200px] text-slate-800">
                  <h3 className="text-[2.1rem] font-light tracking-[-0.05em] text-slate-800">{office.city}</h3>
                  <p className="mt-3 text-[1.1rem] leading-8 text-slate-700">{office.street}</p>
                  <p className="text-[1.1rem] leading-7 text-slate-700">{office.postal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
               <div className="mx-auto max-w-7xl px-6 py-10 mt-30">
                <div className="rounded-3xl border border-emerald-500/20 bg-slate-900 p-6 shadow-lg shadow-emerald-950/20 md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">Dashboard</p>
                            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">Need a reliable textile partner?</h3>
                            <p className="mt-3 max-w-xl text-slate-300">
                                From product planning to export-ready delivery, we help businesses build quality, scale faster, and stay consistent.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3 text-center sm:gap-4">
                            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-4">
                                <div className="text-2xl font-bold text-emerald-400">120+</div>
                                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Orders</div>
                            </div>
                            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-4">
                                <div className="text-2xl font-bold text-emerald-400">98%</div>
                                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Quality</div>
                            </div>
                            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-4">
                                <div className="text-2xl font-bold text-emerald-400">24/7</div>
                                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default CurrentProCon
