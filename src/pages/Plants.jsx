import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Plants = () => {
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
  
  fetch("/plants.json")
  .then(res => res.json())
  .then(data => {
  
  const topRated = data
  .sort((a,b) => b.rating - a.rating)
  .slice(0,9) 
  
  setPlants(topRated)
  
  })
  
  },[])
  
  return (
  
  <div className="p-10 mb-5">
  
  <h2 className="text-3xl font-bold text-center mb-10">
   All Plants
  </h2>
  
  <div className="grid md:grid-cols-3 gap-5">
  
  {
  plants.map(plant => (
  
  <div key={plant.plantId} className="card bg-base-100 shadow rounded-2xl">
  
  <figure>
  <img className="w-full h-70" src={plant.image}/>
  </figure>
  
  <div className="card-body">
  
  <div className="flex justify-between items-center">
    <div>
      <h2 className="card-title">
       {plant.plantName}
    </h2>
    </div>
  
   <div>
      <p>⭐ {plant.rating}</p>
   </div>
  </div>
  
  <p className="">Price: ${plant.price}</p>
   <Link to={`/plant/${plant.plantId}`}></Link>
  <button  className="btn btn-primary p-2 mx-40 rounded-sm">View Details</button>
  
  </div>
  
  </div>
  
  ))
  }
  
  </div>
  
  </div>
  
  )
}

export default Plants