import  { createContext, useState } from 'react'
import PropTypes from 'prop-types'


const initialState = {
  brand:[],
  ram:[],
  operatingSystem:[],
  price:0,
  networkTypes:[]
}
export const FiltersContext = createContext({})

export function FilterContextProvider({ children }) {
    const [filters, setFilters] = useState(initialState)
  return (
    <FiltersContext.Provider value={{ filters, setFilters}}>
        {children}
    </FiltersContext.Provider>
    
  )
}

FilterContextProvider.propTypes = {
  children :  PropTypes.element.isRequired
}



