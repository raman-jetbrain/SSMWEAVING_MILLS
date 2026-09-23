import React from 'react'
import heroImage from '../assets/Banners/hero.png'

const Hero = () => {
  return (
    <section className="w-full">
      <img
        src={heroImage}
        alt="SSM Weaving Mills"
        className="block h-auto w-full object-cover"
      />
    </section>
  )
}

export default Hero
