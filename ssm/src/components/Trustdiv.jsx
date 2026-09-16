import React from 'react'

const Trustdiv = () => {
  return (
    <>
    {/* Add this inside your <section>, just below the text content container */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30 w-11/12 max-w-5xl bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl shadow-2xl p-6 hidden md:grid grid-cols-4 gap-6 text-center text-white">
        <div>
        <h3 className="text-3xl font-bold text-indigo-400">25+</h3>
        <p className="text-sm text-gray-200 mt-1">Years of Excellence</p>
        </div>
        <div>
        <h3 className="text-3xl font-bold text-indigo-400">150+</h3>
            <p className="text-sm text-gray-200 mt-1">Advanced Looms</p>
            </div>
            <div>
        <h3 className="text-3xl font-bold text-indigo-400">50M+</h3>
    <p className="text-sm text-gray-200 mt-1">Meters Woven</p>
    </div>
    <div>
    <h3 className="text-3xl font-bold text-indigo-400">30+</h3>
    <p className="text-sm text-gray-200 mt-1">Global Countries</p>
    </div>
</div>
    </>
)
}

export default Trustdiv