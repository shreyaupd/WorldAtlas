import { useRef, useEffect, use } from 'react'
import { gsap } from 'gsap'
import world from '../assets/image/world.png'

const Home = () => {
  const headingref = useRef(null)
  const imgref = useRef(null)
 
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.from(headingref.current, {
      opacity: 0,
      x: -50,
      duration: 1,
    }).from(
      imgref.current,
      {
        opacity: 0,
        x: 50,
        duration: 1,
      },
      "-=0.5"
    );
  },
  );
  return () => ctx.revert();   
},[])


  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-10 text-3xl font-display">
      <div className="flex justify-between">
        <div ref={headingref} className="ml-[90px] w-[850px] h-[40vh]">
          <h1 className="heading-xl">
            Explore the world<br /> one country at a time.
          </h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every corner of the globe.
            Sort, search and filter through countries to find the details you need.
          </p>
        </div>
        <div ref={imgref}>
          <img className="ml-40 hero-image w-8/10" src={world} alt="World" />
        </div>
      </div>
    </div>
  )
}

export default Home