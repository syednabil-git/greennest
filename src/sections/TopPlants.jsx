import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const TopPlants = () => {

const [plants, setPlants] = useState([])

useEffect(() => {

fetch("/plants.json")
.then(res => res.json())
.then(data => {

const topRated = data
.sort((a,b) => b.rating - a.rating)
.slice(0,3) 

setPlants(topRated)

})

},[])

return (

<div className="pt-10">

<h2 className="text-3xl font-bold text-center mb-5">
Top Rated Plants
</h2>

<div className="grid md:grid-cols-3 gap-3">

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
<div className="justify-center flex ">
   <Link to={`/plant/${plant.plantId}`}>
  <button  className="btn btn-primary p-2 justify-center flex rounded-sm">View Details</button>
  </Link>
</div>

</div>

</div>

))
}

</div>

</div>

)

}

export default TopPlants