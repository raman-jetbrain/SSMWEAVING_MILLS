import React, { useEffect, useRef, useState } from 'react'
import videoOne from '../assets/Hero_banner.mp4'
import videoTwo from '../assets/Hero_banner2.mp4'

const playlist = [videoOne, videoTwo]

const Hero_Banner = () => {
  const videoRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || !video.duration) return

    const timeLeft = video.duration - video.currentTime
    if (timeLeft <= 0.8 && !isFading) {
      setIsFading(true)
    }
  }

  const handleVideoEnded = () => {
    const nextIndex = (currentIndex + 1) % playlist.length
    setCurrentIndex(nextIndex)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    video.play()
      .then(() => {
        setIsFading(false)
      })
      .catch(() => {})
  }, [currentIndex])

  return (
    <section className="relative w-full h-190 overflow-hidden bg-black border-b-8 border-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        className={`block aspect-video h-auto w-full object-cover transition-opacity duration-700 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        aria-label="SSM Weaving Mills"
      >
        <source src={playlist[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight mb-4 drop-shadow-md">
          Welcome to SSM Weaving <br /> & Knitting Mills
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
          Crafting excellence in every thread with state-of-the-art weaving technology.
        </p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-emerald-900 hover:bg-emerald-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
          >
            Explore
          </a>
          <a
            href="#products"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-colors"
          >
            Our Products
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero_Banner