import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">Let’s discuss your textile requirements</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <div className="mt-6 space-y-4 text-slate-200">
              <p>Email: sales@ssmtextiles.com</p>
              <p>Phone: +00 000 000 000</p>
              <p>Location: Export Hub, Bangladesh</p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Your name" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="you@example.com" />
            </div>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea className="min-h-28 w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="Tell us about your requirement" />
            </div>

            <button type="button" className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact
