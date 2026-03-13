import { useEffect, useState } from "react"

const Experts = () => {

const [experts, setExperts] = useState([])

useEffect(()=>{

fetch("/experts.json")
.then(res => res.json())
.then(data => setExperts(data))

},[])

return (

<div className="py-20 px-10">

<h2 className="text-3xl font-bold text-center mb-10">
Meet Our Green Experts
</h2>

<div className="grid md:grid-cols-4 gap-8 rounded-full">

{
experts.map(expert => (

<div key={expert.id} className="card bg-base-100 shadow rounded-t-full">

<figure>
<img className="w-full h-80 rounded-2xl" src={expert.image}/>
</figure>

<div className="card-body text-center">

<h2 className="card-title justify-center">
{expert.name}
</h2>

<p className="text-green-600 font-semibold">
{expert.specialty}
</p>

<p>{expert.experience}</p>

<p className="text-sm">
{expert.description}
</p>

</div>

</div>

))
}

</div>

</div>

)

}

export default Experts