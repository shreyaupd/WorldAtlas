import React from 'react'
import { useContext } from 'react'
import { CountryContext } from '../utils/CountryContext'
const SearchFilter = () => {
    const { filter, setfilter, search, setsearch, sortCountries}= useContext(CountryContext)
    const handleSelectChange=(e)=>{
        e.preventDefault();
        setfilter(e.target.value);
    }
    
    const handleInputChange=(e)=>{
        e.preventDefault();
        setsearch(e.target.value);
    }
  return (
   <div>
     <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>
          <div>
            <button onClick={()=>sortCountries("asc")}>Asc</button>
          </div>
          <div>
            <button onClick={()=>sortCountries("des")}>Desc</button>
          </div>
        <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      </section>
    </div>

  )
}

export default SearchFilter