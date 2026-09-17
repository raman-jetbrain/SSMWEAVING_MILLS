import React from 'react'
import { Link } from 'react-router-dom'

const Cardbtn = () => {
  return (
    <Link
      to="/about"
      className="group relative mx-auto flex items-center py-3 px-4 border-none bg-transparent cursor-pointer transition-all duration-200 active:scale-95"
    >
      <span className="absolute top-0 left-0 block rounded-full bg-emerald-600 w-11 h-11 transition-all duration-300 group-hover:w-full" />

      <span className="relative font-sans text-lg font-bold tracking-wide text-black">
        About us
      </span>

      <svg
        className="relative top-0 ml-2.5 fill-none stroke-linecap-round stroke-linejoin-round stroke-[#234567] stroke-2 -translate-x-1.25 group-hover:translate-x-0 transition-all duration-300"
        width="15px"
        height="10px"
        viewBox="0 0 13 10"
      >
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </Link>
  )
}

export default Cardbtn