import {useState,  useContext} from 'react'
import Options from './Options';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {FiltersContext} from '../../context/FilterContext.jsx';


function NetworkTypes() {
    const network = ['2G', '3G', '4G', '5G'];

    const [isOpen , setIsOpen]  = useState(false);
    const {filters, setFilters} =  useContext(FiltersContext);


    const handleClick = (ev) => {
        const {checked, name} = ev.target;
        if(checked){
              setFilters({...filters, networkTypes : [...filters.networkTypes ,name]});
            }else{
              let filteredRams = filters.networkTypes.filter(types => types !==name)
              setFilters({...filters, networkTypes:filteredRams})
              
            }

        }
  return (
    <div className="py-3 px-4 border-b-2 text-lg ">
    <div className='flex justify-between'>
        <span className='font-medium'>Type</span>
        <button onClick={() => setIsOpen(isOpen => !isOpen)}>
            {isOpen ? <IoIosArrowUp /> :  <IoIosArrowDown />}
        </button>
    
    </div>


    <div className="flex flex-col gap-2  py-3">
        <div className={isOpen?'block':'hidden'}>

    {network.map((network,Index) => (
        <Options key={Index} name = {network} selected={filters} handleClick={handleClick} />
    ))}
            </div>

  </div>  
  
  </div>
  )}

export default NetworkTypes