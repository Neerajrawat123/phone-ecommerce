import {useState, useContext} from 'react'
import Options from './Options';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {FiltersContext} from '../../context/FilterContext.jsx';


function OperatingSystem() {
    const OperatingSystems = ['Android', 'iOS', 'Window'];
    const [isOpen , setIsOpen]  = useState(false);
    const {filters, setFilters} =  useContext(FiltersContext)


    const handleClick = (ev) => {
      const {checked, name} = ev.target;
      if(checked){
            setFilters({...filters, operatingSystem : [...filters.operatingSystem,name]});
          }else{
            let filteredRams = filters.operatingSystem.filter(os => os !==name)
            setFilters({...filters, operatingSystem:filteredRams})
            
          }
        }

  return (
    <div className="py-3 px-4 border-b-2 ">
    <div className='flex justify-between'>
    <span className='font-medium'>Operating system</span>
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
            {isOpen ? <IoIosArrowUp /> :  <IoIosArrowDown />}
        </button>
    
    </div>


  <div className="flex flex-col gap-2   py-3 ">
  <div className={isOpen ? "block" : "hidden"}>

  {OperatingSystems.map((operatingSystem,Index) => (
        <Options key={Index} name = {operatingSystem} selected={filters} handleClick={handleClick} />
    ))}
    </div>
  </div>
  </div>

    )
}

export default OperatingSystem