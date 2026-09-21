import cardImg from '../../assets/icons/bg-ssm.png'

const Cards = () => {
  return (
    <div className="flex w-52 flex-col overflow-hidden rounded-2xl bg-gray-300 shadow-lg transition duration-300 hover:shadow-2xl">
      <img src={cardImg} alt="SSM textile" className="h-40 w-full object-cover" />

      <div className="flex h-52 flex-col justify-between bg-white p-3">
        <h1 className="text-lg font-bold text-emerald-600">SSM Weavings</h1>
        <p className="text-sm text-gray-700">
          We export high-quality woven fabrics for a wide range of industries.
        </p>

        <button className="rounded-lg bg-emerald-600 px-2 py-1 text-white transition duration-300 hover:bg-emerald-700">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Cards