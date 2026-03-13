import { useEffect, useState } from "react"

const EcoDecor = () => {

const [ideas, setIdeas] = useState([])

useEffect(()=>{

fetch("/ecoDecor.json")
.then(res => res.json())
.then(data => setIdeas(data))

},[])

return(

<div className="py-20">

<h2 className="text-3xl font-bold text-center mb-10">
Eco Decor Ideas
</h2>

<div className="grid grif-cols-2 md:grid-cols-4 gap-5">

{
ideas.map(item => (

<div key={item.id} className="card bg-base-100 shadow">

<figure>
<img className="w-full h-60" src={item.image}/>
</figure>

<div className="card-body">

<h2 className="card-title">
{item.title}
</h2>

<p>{item.description}</p>

</div>

</div>

))
}

</div>

</div>

)

}

export default EcoDecor