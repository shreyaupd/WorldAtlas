import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import world from '../assets/image/world.png'
import { FaArrowRight } from "react-icons/fa";

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
    });
    return () => ctx.revert();   
  }, [])

  return (
    <div className="mt-30 md:mt-0 flex flex-col items-center justify-center h-[70vh] gap-10 text-3xl font-display">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4">
        <div ref={headingref} className="lg:ml-[90px] w-full lg:w-[500px] h-auto lg:h-[40vh]">
          <h1 className="heading-xl">
            Explore the world<br /> one country at a time.
          </h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every corner of the globe.
            Sort, search and filter through countries to find the details you need.
          </p>
          <div>
            <button>Get Started<FaArrowRight/></button>
          </div>
        </div>
        <div ref={imgref} className="mt-8 lg:mt-0">
          <img className="lg:ml-40 hero-image w-full lg:w-auto max-w-2xl xl:max-w-4xl 2xl:max-w-none" src={world} alt="World" />
        </div>
      </div>
    </div>
  )
}

export default Home