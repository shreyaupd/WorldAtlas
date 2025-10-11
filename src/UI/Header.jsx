import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap';

const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const hamburgerref = useRef(null)
  const Menuref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(hamburgerref.current, {
        rotation: MenuOpen ? 90 : 0,
      });

      if (MenuOpen) {
        gsap.fromTo(Menuref.current, 
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1 }
        );
      } else {
        gsap.to(Menuref.current, {
          y: -100,
          opacity: 0,
        });
      }
    });

    return () => ctx.revert();
  }, [MenuOpen]);

  return (
    <div className='flex justify-center items-center bg-[#1c1c1c] h-30 w-full relative'>
      <div className='flex justify-between items-center w-full md:w-8/10 p-5 h-30'>
        <div className="text-4xl font-display md:text-5xl text-white font-logo tracking-wider drop-shadow-lg">
          WORLDATLAS
        </div>
        
        {/* Desktop Navigation - Use your CSS classes */}
        <div className='menu-web hidden md:block text-white text-xl'>
          <ul className='cursor-pointer flex gap-15'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Country</li>
          </ul>
        </div>

        {/* Hamburger Button - Use your CSS classes */}
        <button 
          ref={hamburgerref} 
          className='ham-menu md:hidden !bg-[#1c1c1c] !border-none !rounded-none text-white !p-2 text-2xl' 
          onClick={() => setMenuOpen(!MenuOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu - Use your CSS classes */}
      <div 
        ref={Menuref} 
        className='menu-mobile absolute top-full left-0 w-full bg-[#1c1c1c] border-t border-gray-700 z-50'
        style={{ display: MenuOpen ? 'block' : 'none' }}
      >
        <ul className='cursor-pointer flex flex-col items-center py-4'>
          <li className='text-white text-xl py-3 w-full text-center hover:bg-gray-800'>Home</li>
          <li className='text-white text-xl py-3 w-full text-center hover:bg-gray-800'>About</li>
          <li className='text-white text-xl py-3 w-full text-center hover:bg-gray-800'>Contact</li>
          <li className='text-white text-xl py-3 w-full text-center hover:bg-gray-800'>Country</li>
        </ul>
      </div>
    </div>
  )
}

export default Header