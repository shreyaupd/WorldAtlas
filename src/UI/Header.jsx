import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-[#1c1c1c] h-30  w-full '>
      <div className='flex justify-between items-center w-8/10 p-5 h-30'>
        <div className="text-4xl font-display md:text-5xl text-white font-logo tracking-wider drop-shadow-lg">
          WORLDATLAS
        </div>
        <div className='text-white text-xl'>
          <ul className='cursor-pointer flex gap-15'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Country</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header