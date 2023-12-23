import { useContext, useState } from "react";
import Options from "./Options.jsx";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {FiltersContext} from '../../context/FilterContext.jsx';
function SearchFilter() {
    const [isOpen , setIsOpen]  = useState(false);
    const {filters, setFilters} =  useContext(FiltersContext)



    const brandsName = ['Samsung', 'Apple', 'OnePlus', 'Redmi'];

    const handleClick = (ev) => {
        const {checked, name} = ev.target;
        if(checked){
              setFilters({...filters, brand:[...filters.brand,name]});
            }else{
              let newBrands = filters.brand.filter(brand=> brand !==name)
              setFilters({...filters, brand:newBrands})
              
            }
          }

    

  return (
    <div className=" md:py-3 border-b-2 text-xl  px-8">
      <div className="flex justify-between">
    <span className=" text-lg px-1  text-black">Search</span>
    <button onClick={() => setIsOpen(isOpen => !isOpen)}>
            {isOpen ? <IoIosArrowUp /> :  <IoIosArrowDown />}
        </button>
      </div>
    <div className="md:py-2 md:pr-2 ">

    </div>
    <div className="flex flex-col gap-2 py-3 ">
    <div className={isOpen ? "block" : "hidden"}>

        {brandsName.map((brand,index) => (
            <Options key={index} name={brand}  handleClick={handleClick}/>
        ))}
     </div>
    </div>
  </div>  )
}

export default SearchFilter