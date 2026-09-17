import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/bg-ssm.png'

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
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/dashboard" className="inline-block">
            <img src={logo} alt="SSM Weaving Mills" className="h-auto w-44 rounded-lg bg-white p-2" />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-slate-400">
            SSM Weaving & Knitting Mills delivers dependable textile manufacturing and export solutions with quality in every thread.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-400">
              LinkedIn
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-emerald-400 hover:text-emerald-400">
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Company</h2>
          <nav className="mt-5 flex flex-col gap-3">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="w-fit transition hover:text-emerald-400">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Contact</h2>
          <div className="mt-5 space-y-3 leading-6 text-slate-400">
            <p>sales@ssmtextiles.com</p>
            <p>+00 000 000 000</p>
            <p>Export Hub, Bangladesh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SSM Weaving Mills. All rights reserved.</p>
          <p>Built for quality. Ready for the world.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
