import {useContext, } from 'react'
import { FiltersContext } from '../../context/FilterContext'

function PriceSec() {
    const {filters, setFilters} = useContext(FiltersContext)
  return (
    <div className="py-3 px-4 border-b-2">
    <span className="font-medium text-lg px-1 text-black">Price</span>
    <div className="py-2 pr-2 w-full ">
      <input
        className="w-full h-[5px] bg-zinc-900 accent-blue-700"
        type="range"
        min={0}
        max={1000}
        value={filters.price}
        onChange={(ev) => setFilters({...filters, price:ev.target.value})}
        name="price"
        id=""
      />
    </div>
    <span>{filters.price}</span>
  </div>  )
}

export default PriceSec