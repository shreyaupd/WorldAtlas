import React from 'react'
import { useParams } from 'react-router-dom'
const CountryDetails = () => {
const params = useParams();
console.log(params);
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails