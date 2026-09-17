import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards/Cards'
import Container from '../components/Containers/Container'
import Input from '../components/Input'
import Footer from '../components/Footer'
import Space from '../components/Space'
import Hero from '../components/Hero'
import ProductCon from '../components/Containers/productCon'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />  
      <ProductCon/>
      <Container/>
    </div>
  )
}

export default About
