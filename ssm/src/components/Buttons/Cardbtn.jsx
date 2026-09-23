import React from 'react'
import { Link } from 'react-router-dom'

const Cardbtn = () => {
  return (
    <Link
      to="/about"
      className="group relative mx-auto flex items-center border-none bg-transparent px-3 py-2.5 transition-all duration-200 active:scale-95 sm:px-4 sm:py-3"
    >
      <span className="absolute left-0 top-0 block h-10 w-10 rounded-full bg-emerald-600 transition-all duration-300 group-hover:w-full sm:h-11 sm:w-11" />

      <span className="relative font-sans text-base font-bold tracking-wide text-black sm:text-lg">
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