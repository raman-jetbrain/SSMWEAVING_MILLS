import React from 'react'

const ContactTab = () => {
  return (
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight text-slate-900">Let’s discuss your textile requirements</h1>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-900 p-8 text-left text-white shadow-lg md:p-10">
            <h2 className="text-2xl font-bold leading-tight">SSM WEAVING & KNITTING MILLS</h2>
            <div className="mt-6 space-y-4 text-left leading-relaxed text-slate-200">
              <p><span className="font-semibold text-white">Location:</span> No. 4/492 M.R.G Complex, Palladam Road, Veerpandi Pirivu, Tiruppur - 641 605</p>
              <p><span className="font-semibold text-white">Email:</span> processmills@hotmail.com<br />ssmweavin@gmill.com</p>
              <p><span className="font-semibold text-white">Phone:</span> +91 96264 95565<br />904047080491</p>
              <p><span className="font-semibold text-white">GSTIN:</span> 33IOCPK1418C1ZH</p>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm md:p-10">
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
  )
}

export default ContactTab
