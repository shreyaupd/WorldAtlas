import React from 'react'
import { createContext, useState} from 'react' 

export const CountryContext = createContext();
const CountryProvider = ({children}) => {
    const [filter,setfilter]=useState('all');
    const [search,setsearch]=useState();
  return (
    <CountryContext.Provider value={{filter, setfilter, search, setsearch}}>
        {children}
    </CountryContext.Provider>
  )
}

export default CountryProvider