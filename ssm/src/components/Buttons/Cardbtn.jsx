import React from 'react'

const Cardbtn = () => {
  return (
    <button className="group relative mx-auto flex items-center py-3 px-[18px] border-none bg-transparent cursor-pointer transition-all duration-200 active:scale-95">
      {/* Expanding background circle that becomes full width on hover */}
      <span className="absolute top-0 left-0 block rounded-[50px] bg-gray-400 w-[45px] h-[45px] transition-all duration-300 group-hover:w-full" />

      {/* Button Text */}
      <span className="relative font-['Ubuntu',sans-serif] text-[18px] font-bold tracking-[0.05em] text-black">
        About us 
      </span>

      {/* Animated Arrow Icon */}
      <svg 
        className="relative top-0 ml-[10px] fill-none stroke-linecap-round stroke-linejoin-round stroke-[#234567] stroke-[2] -translate-x-[5px] group-hover:translate-x-0 transition-all duration-300"
        width="15px" 
        height="10px" 
        viewBox="0 0 13 10"
      >
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </button>
  )
}

export default Cardbtn