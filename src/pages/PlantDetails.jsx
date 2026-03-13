import { useLoaderData, useParams } from "react-router-dom"

const PlantDetails = () => {

const data = useLoaderData()
const { id } = useParams()

const plant = data.find(p => p.plantId == id)

return (

<div className="max-w-6xl mx-auto py-20">

<div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg p-10 rounded-xl">

{/* Plant Image */}
<div>
<img
src={plant.image}
className="rounded-xl w-full"
/>
</div>

{/* Plant Info */}
<div>

<h1 className="text-4xl font-bold mb-3">
{plant.plantName}
</h1>

<p className="text-yellow-500 text-lg">
⭐ {plant.rating}
</p>

<p className="mt-2">
<b>Category:</b> {plant.category}
</p>

<p>
<b>Care Level:</b> {plant.careLevel}
</p>

<p>
<b>Stock:</b> {plant.availableStock}
</p>

<p className="text-2xl text-green-600 font-bold mt-3">
${plant.price}
</p>

<p className="mt-5 text-gray-600">
{plant.description}
</p>

</div>

</div>


{/* Consultation Form */}

<div className="mt-12 bg-green-50 p-8 rounded-xl shadow">

<h2 className="text-2xl font-bold mb-5">
Book Consultation
</h2>

<form className="space-y-4">

<input
type="text"
placeholder="Your Name"
className="input input-bordered w-full"
/>

<input
type="email"
placeholder="Your Email"
className="input input-bordered w-full"
/>

<button className="btn btn-success w-full">
Book Now
</button>

</form>

</div>

</div>

)

}

export default PlantDetails;