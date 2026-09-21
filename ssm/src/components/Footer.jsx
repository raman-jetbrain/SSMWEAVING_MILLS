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

  return (
    
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-5 px-4 py-6 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 lg:grid-cols-4 lg:py-14">
        <div className="col-span-2 lg:col-span-2">
          <Link to="/dashboard" className="inline-block">
            <img src={logo} alt="SSM Weaving Mills" className="h-auto w-28 rounded-lg bg-white p-1.5 sm:w-36 lg:w-44 lg:p-2" />
          </Link>
          <p className="mt-3 max-w-md text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base lg:leading-7">
            SSM Weaving & Knitting Mills delivers dependable textile manufacturing and export solutions with quality in every thread.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 lg:mt-6 lg:gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs transition hover:border-emerald-400 hover:text-emerald-400 sm:text-sm lg:px-4 lg:py-2">
              LinkedIn
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
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
          <div className="mt-3 space-y-1.5 wrap-break-word text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6 lg:mt-5 lg:space-y-3 lg:text-base">
            <p>sales@ssmtextiles.com</p>
            <p>+00 000 000 000</p>
            <p>Export Hub, Bangladesh</p>
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
