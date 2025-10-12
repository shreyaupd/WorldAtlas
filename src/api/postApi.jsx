import React from 'react'
import axios from 'axios'
  const api = axios.create({
    baseURL:"https://restcountries.com/v3.1/",
    })
const fetchCountries = () => {
  
  return api.get('all?fields=name,population,region,capital,flags')
}

export default fetchCountries

// This code creates an axios API instance (api) with base URL https://restcountries.com/v3.1/.

// The function postApi calls the all endpoint but only fetches particular fields (name, population, region, capital, flags).
//all?fields=name,population,region,capital,flags → endpoint ho, jasle particular country fields matra return garcha.
// This way, extra unnecessary data is skipped and the function can be easily reused in other components.