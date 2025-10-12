import React from 'react'
import fetchCountries from '../api/postApi'
import Loader from '../UI/Loader'
import CountryCard from '../components/CountryCard'
import { useEffect, useTransition, useState } from 'react'
const Country = () => {
  const [isPending, startTransition] = useTransition()
  const [countries, setCountries] = React.useState([])
  useEffect(() => {
    startTransition(async () => {
      const res = await fetchCountries()
     setCountries(res.data)
    })
  },[])
  if(isPending){
    return <Loader/>
  }
  return (
    <div className='mx-40 '>
    <ul className='grid grid-four-cols'>
      {
             countries.map((country,index)=>{
              return <CountryCard country={country} key={index}/>
             })
      }
    </ul>
    </div>
  )
}

export default Country