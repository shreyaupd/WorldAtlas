import React, { useEffect } from 'react'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import countryfacts from '../api/countryData.json'
const About = ({animate}) => {
  const cardref=useRef([]);
  useEffect(() => {
    if(!animate) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5
      });
      tl.fromTo(cardref.current,
        { y: 100, opacity: 0 },
        { y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power2.out",
          scrollTrigger:{
            trigger:".card",
            start:"top 80%",
            end :"bottom 20%",
            scrub:true,
            toggleActions:"play none none reverse",
          }
        }
      )

  })
  return ()=>ctx.revert();
},[animate])

  const countryref= (el)=>{
    if(el && !cardref.current?.includes(el)){
      cardref.current.push(el)
    }
  }
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the interesting facts <br /> we are proud of
      </h2>
      <div className='gradient-cards'>
        {countryfacts.map((country)=>{
          const {id,countryName,capital,population,interestingFact}=country;
          return (
           <div ref={countryref} className='card' key={id}>
          <div className='container-card bg-blue-box'>
            <p className='card-title'> {countryName}  </p>
            <p>
              <span className='card-description'>
                Capital:
              </span>
              {capital}
            </p>
            <p>
              <span className='card-description'>Population: </span>
              {population}
            </p>
            <p>
              <span className="card-description">Interesting Facts:</span>
              {interestingFact}
            </p>
          </div>
        </div>
          )
        })}
        
      </div>
    </section>

  )
}

export default About