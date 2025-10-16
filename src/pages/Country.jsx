import React, { useEffect, useTransition, useState, useContext } from 'react'
import { fetchCountries } from '../api/postApi'
import Loader from '../UI/Loader'
import CountryCard from '../components/CountryCard'
import SearchFilter from '../components/SearchFilter'
import { CountryContext } from '../utils/CountryContext'

const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])
  const { filter, search, sortOrder } = useContext(CountryContext)

  useEffect(() => {
    startTransition(async () => {
      const res = await fetchCountries()
      setCountries(res.data)
    })
  }, [])

  if (isPending) {
    return <Loader />
  }

  const searchedCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return true
  }

  const filterByRegion = (country) => {
    if (filter === 'all') return true
    return country.region === filter
  }

  // filtering logic
  const filteredCountries = countries.filter(
    (country) => searchedCountry(country) && filterByRegion(country)
  )

  // sorting logic (based on context)
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common)
  })

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40'>
      <SearchFilter />
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {sortedCountries.map((country, index) => (
          <CountryCard country={country} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default Country
