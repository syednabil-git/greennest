import React from 'react'
import hero from "../assets/hero.JPG"
import Button from 'daisyui/components/button'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='flex justify-between items-center bg-white p-10'>
      <div className='w-1/2'>
          <h1 className='font-semibold text-4xl text-secondary'>Bring Nature  
            <span> <br></br>Into Your Home</span></h1>
          <p className='mb-5 mt-3'>Discover beautiful indore plants for your living space.</p>
          <NavLink className='btn btn-accent text-white font-semibold text-lg' to="/plants">Explore Plants</NavLink>
      </div>
      <div className='w-1/2'>
        <img className='w-full h-120' src={hero}></img>
      </div>
    </div>
  )
}

export default Hero