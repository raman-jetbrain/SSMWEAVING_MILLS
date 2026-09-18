import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer' 
import Space from '../components/Space'
import Container from '../components/Containers/Container'
import Hero_Banner from '../components/Hero_Banner'
import Trustdiv from '../components/Trustdiv'
import DevCon from '../components/Containers/DevCon'
import HomeCon from '../components/Containers/HomeCon'
import ProductCon from '../components/Containers/ProductCon'
import CurrentProCon from '../components/Containers/CurrentProCon'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Hero_Banner />
            <Space />
            <DevCon />
            <HomeCon/>
            <CurrentProCon/>
            <div className="mx-auto max-w-7xl px-6 py-10">
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
            <Space />
            <Footer />
        </div>
    )
}

export default Dashboard
