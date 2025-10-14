import React from 'react'
import { fetchCountries } from '../api/postApi'
import Loader from '../UI/Loader'
import CountryCard from '../components/CountryCard'
import { useEffect, useTransition, useState } from 'react'

const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = useState([])

  useEffect(() => {
    startTransition(async () => {
      const res = await fetchCountries()
      setCountries(res.data)
    })
  }, [])

  if (isPending) {
    return <Loader />
  }

  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {countries.map((country, index) => {
          return <CountryCard country={country} key={index} />
        })}
      </ul>
    </div>
  )
}

export default Country