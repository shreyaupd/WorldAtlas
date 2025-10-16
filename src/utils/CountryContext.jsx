import React, { createContext, useState } from 'react'

export const CountryContext = createContext()

const CountryProvider = ({ children }) => {
  const [filter, setfilter] = useState("all")
  const [search, setsearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  const sortCountries = (order) => {
    setSortOrder(order)
  }

  return (
    <CountryContext.Provider
      value={{
        filter,
        setfilter,
        search,
        setsearch,
        sortOrder,
        sortCountries
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export default CountryProvider
