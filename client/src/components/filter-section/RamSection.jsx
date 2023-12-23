import { useState, useContext } from "react";
import Options from "./Options";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {FiltersContext} from '../../context/FilterContext.jsx';


function RamSection() {
  const ramTypes = ["2GB", "3GB", "4GB", "6GB", "8GB"];
  const [isOpen, setIsOpen] = useState(false);
  const {filters, setFilters} =  useContext(FiltersContext)


  const handleClick = (ev) => {
    const {checked, name} = ev.target;
    if(checked){
          setFilters({...filters, ram : [...filters.ram,name]});
        }else{
          let filteredRams = filters.ram.filter(ram => ram !==name)
          setFilters({...filters, ram:filteredRams})
          
        }
      }

  return (
    <div className="py-3 px-4 border-b-2 text-xl">
      <div className="flex justify-between">
        <span className="font-medium">Ram</span>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>

      <div className="flex flex-col gap-2  py-3  ">
        <div className={isOpen ? "block" : "hidden"}>
          {ramTypes.map((ram, Index) => (
            <Options
              key={Index}
              name={ram}
              selected={filters}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RamSection;
