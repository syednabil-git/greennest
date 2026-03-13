import { Link } from "react-router";

const PlantCard = ({ plant }) => {

return (

<div className="card bg-base-100 shadow">

<figure>
<img src={plant.image} />
</figure>

<div className="card-body">

<h2 className="card-title">{plant.plantName}</h2>

<p>Price: ${plant.price}</p>

<p>Rating: {plant.rating}</p>

<Link
to={`/plant/${plant.plantId}`}
className="btn btn-primary"
>
View Details
</Link>

</div>

</div>

)

}

export default PlantCard