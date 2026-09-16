import cardImg from '../Cards/Cards.jsx'

const Cards = () => {
  return (
    <div className = "flex flex-col items-center justify-between bg-gray-300 w-50 h-80 rounded-2xl p-1.5 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 shadow-1xl">
         <img src={cardImg} alt="Image" className = " w-full h-40 object-cover rounded-t-2xl" />
        <div className = "flex flex-col items-start justify-between bg-white w-48 h-50 rounded-b-2xl p-2 overflow-hidden">
           <h1 className = "flex items-start text-lg font-sans font-bold text-emerald-600 mb-2">SSM weavings</h1>
           <p className = "flex items-start text-sm font-sans text-gray-700 mb-2">We exporter of high-quality woven fabrics, specializing in a wide range of industries.</p>
           <div className = "flex items-center justify-center">
           <button className = "bg-emerald-600 text-white px-2 py-1 rounded-lg hover:bg-emerald-700 transition duration-300">Learn More</button>
        </div>
        </div>
        
    </div>
  )
}

export default Cards