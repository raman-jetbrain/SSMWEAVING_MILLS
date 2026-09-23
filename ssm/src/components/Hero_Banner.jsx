import React, { useEffect, useRef, useState } from 'react'
import videoOne from '../assets/Banners/Hero_banner.mp4'
import videoTwo from '../assets/Banners/Hero_banner2.mp4'

const playlist = [videoOne, videoTwo]

const Hero_Banner = () => {
  const videoRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleVideoEnded = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length)
      setIsFading(false)
    }, 450)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    video.play().catch(() => {})
  }, [currentIndex])

  return (
    <section className="relative aspect-4/3 w-full overflow-hidden border-b-8 border-white bg-black sm:aspect-video lg:aspect-21/9">
      <video
        ref={videoRef}
        className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        aria-label="SSM Weaving Mills"
      >
        <source src={playlist[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center sm:px-6">
        <h1 className="max-w-4xl text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-tight tracking-tight text-white drop-shadow-md">
          Welcome to SSM Weaving <br /> & Knitting Mills
        </h1>
        <p className="mb-5 max-w-2xl text-[clamp(0.85rem,2vw,1.25rem)] leading-relaxed text-gray-200 drop-shadow sm:mb-8">
          Crafting excellence in every thread with state-of-the-art weaving technology.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="#contact" className="bg-emerald-900 px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-emerald-900">
            Explore
          </a>
          <a href="#products" className="bg-white/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30">
            Our Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero_Banner