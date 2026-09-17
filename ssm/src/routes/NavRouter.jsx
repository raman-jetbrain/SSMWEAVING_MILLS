import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

const NavRouter = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default NavRouter
