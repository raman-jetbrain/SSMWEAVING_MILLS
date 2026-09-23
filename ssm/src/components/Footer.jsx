import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icons/bg-ssm.png'

const Footer = () => {
  const links = [
    { label: 'Home', to: '/dashboard' },
    { label: 'About us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Products', to: '/products' },
    { label: 'Contact', to: '/contact' }
  ]

  const linked = [
    { label: 'Product Orders', to: '/dashboard' },
    { label: 'Bulk Orders', to: '/about' },
    { label: 'Services Info ', to: '/services' },
    { label: 'Products Shipping', to: '/products' },
    { label: 'Personal Guidance', to: '/contact' }
  ]

   const More = [
    { label: 'Career', to: '/dashboard' },
    { label: 'Export Information', to: '/about' },
    { label: 'Safety measures', to: '/services' },
    { label: 'Samples', to: '/products' },
    { label: 'Availabilty ', to: '/contact' }
  ]

  return (
    
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-2 py-6 sm:gap-8 sm:px-6 sm:py-10 md:gap-8 lg:grid-cols-6 lg:py-12">
        <div className="col-span-2 lg:col-span-2">
          <Link to="/dashboard" className="inline-block">
            <img src={logo} alt="SSM Weaving Mills" className="h-auto w-28 rounded-lg bg-white p-1.5 sm:w-36 lg:w-44 lg:p-1" />
          </Link>
          <p className="mt-3 max-w-md text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base lg:leading-7">
            SSM Weaving & Knitting Mills delivers dependable textile manufacturing and export solutions with quality in every thread.
          </p>
          <br/>
          <p>
            No .4/492 , MGR. Complex Palladam Road , Veerapandi Pirivu, Tiruppur - 641 605 
          </p>
          <div className="mt-4 flex flex-wrap gap-2 lg:mt-6 lg:gap-3">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs transition hover:border-emerald-400 hover:text-emerald-400 sm:text-sm lg:px-4 lg:py-2">
              Instagram
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs transition hover:border-emerald-400 hover:text-emerald-400 sm:text-sm lg:px-4 lg:py-2">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Company</h2>
          <nav className="mt-3 flex flex-col gap-1.5 text-sm sm:gap-2 lg:mt-5 lg:gap-3 lg:text-base">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="w-fit transition hover:text-emerald-400">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Services</h2>
          <nav className="mt-3 flex flex-col gap-1.5 text-sm sm:gap-2 lg:mt-5 lg:gap-3 lg:text-base">
            {linked.map((link) => (
              <Link key={link.to} to={link.to} className="w-fit transition hover:text-emerald-400">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>


        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">More ..</h2>
          <nav className="mt-3 flex flex-col gap-1.5 text-sm sm:gap-2 lg:mt-5 lg:gap-3 lg:text-base">
            {More.map((link) => (
              <Link key={link.to} to={link.to} className="w-fit transition hover:text-emerald-400">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
          <div className="mt-3 space-y-1.5  text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base">
              <p><strong>Phone : </strong> <br/> +91 96264 95565</p>
              <p>+91 90470 80491</p> <br/>
            <p><strong>E-mail : </strong>Processmills@hotmail.com <br/> ssmweavingmill@gmail.com </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-3 text-center text-[11px] text-slate-500 sm:px-6 sm:text-xs md:flex-row md:justify-between md:text-left lg:py-5 lg:text-sm">
          <p>&copy; {new Date().getFullYear()} SSM Weaving Mills. All rights reserved.</p>
          <p>Built for quality. Ready for the world.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
