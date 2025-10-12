import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router'
const CountryCard = ({country}) => {
     const {flags,name,population,region,capital} = country
  return (
    <div>
        <li className='country-card card'>
             <div className='container-card bg-white-box '>
                 <img src={flags.svg} alt={flags.alt} />
                 <div className='countryInfo'>
                    <p className='card-title'>{name.common}</p>
                    <p>
                        <span className='card-description'>Population:{population.toLocaleString()}</span>
                    </p>
                    <p>
                        <span className='card-description'>Region:{region}</span> 
                    </p>
                    <p>
                        <span className='card-description'>Capital:{capital[0]}</span>
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button>Read More<FaArrowRight/></button>
                    </NavLink>
                 </div>
             </div>
        </li>
    
    </div>
  )
}

export default CountryCard