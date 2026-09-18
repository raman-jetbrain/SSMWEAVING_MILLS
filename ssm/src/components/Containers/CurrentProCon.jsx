import React from 'react'
import italyImg from '../../assets/italy.webp'
import germanyImg from '../../assets/germany.webp'
import sriLankaImg from '../../assets/sri-lanka.webp'

const offices = [
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
  }
]

const CurrentProCon = () => {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-12 lg:pr-16 border-t-8 border-white">
      <h1 className="flex items-center justify-center pb-15 text-6xl font-sans font-semibold">
        Our Current Work Projects
      </h1>

      <div className="mx-auto flex h-100 max-w-[1500px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-[620px] pb-10 text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-[0.92] tracking-[-0.06em] text-slate-900">
          <p>
            You actually scroll this far?<br />
            Respect. Here is what we are building right now
          </p>
          <span className="mt-4 inline-block h-[3px] w-[160px] bg-slate-900" />
        </div>

        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-center md:gap-12 lg:pr-8">
          {offices.map((office) => (
            <div key={office.city} className="flex flex-col items-start gap-4">
              <img
                src={office.image}
                alt={office.city}
                className="h-[220px] w-[250px] rounded-[1.5rem] object-cover shadow-sm"
              />

              <div className="min-w-[200px] text-slate-800">
                <h3 className="text-[2.1rem] font-light tracking-[-0.05em] text-slate-800">{office.city}</h3>
                <p className="mt-3 text-[1.1rem] leading-8 text-slate-700">{office.street}</p>
                <p className="text-[1.1rem] leading-7 text-slate-700">{office.postal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentProCon
