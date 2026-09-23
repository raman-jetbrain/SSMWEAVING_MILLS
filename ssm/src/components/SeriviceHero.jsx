import React from 'react'
import img from '../assets/Banners/prod_Banner.png'

const SeriviceHero = () => {
  return (
      <section className="w-full h-fill object-cover">
          <img
            src={img}
            alt="SSM textile shipping and export services"
            className="h-full w-full object-cover "
          />
        </section>
  )
}

export default SeriviceHero
