import React from 'react'
import { FaTint } from 'react-icons/fa'
import { GiPlantSeed } from 'react-icons/gi'
import { WiDaySunny } from 'react-icons/wi'

const CareTips = () => {
  return (
    <div className='text-center mt-10 p-5'>
      <h1 className='font-bold text-3xl '>Plant Care Tips</h1>
      <div className='grid grid-cols-3 gap-3 text-center p-2 mt-5'>
      <div className='bg-amber-100 p-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold mb-3 flex justify-center gap-2'><WiDaySunny></WiDaySunny> Sunlight</h1>
        <h2>place in indirect light</h2>
        <button className='btn btn-primary mt-5 text-white'>View Details</button>
        
      </div>
      <div className='bg-blue-100 p-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold mb-3 flex justify-center gap-2'><FaTint></FaTint> Watering</h1>
        <h2>Water once a week</h2>
        <button className='btn btn-primary mt-5 text-white'>View Details</button>
        
      </div>
      <div className='bg-green-100 p-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold mb-3 flex justify-center gap-2'><GiPlantSeed></GiPlantSeed> Fertilizer</h1>
        <h2>Use organic fertilizer monthly</h2>
        <button className='btn btn-primary mt-5 text-white'>View Details</button>
        
      </div>
      </div>
    </div>
  )
}

export default CareTips