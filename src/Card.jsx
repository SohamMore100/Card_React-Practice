import React from "react"
function Card() {

  const data=[
    {image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics" , desc:"Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam!", instocks:true},
    {image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics" , desc:"Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam!", instocks:true},
    {image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics" , desc:"Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam!", instocks:false},
    {image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics" , desc:"Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam!", instocks:true},
    {image:"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics" , desc:"Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Et, aperiam!", instocks:false},
  ]

  return(
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem,index)=>(
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className="w-full h-full object-cover" src={elem.image} alt="pic" />
        </div>  
        <div className="w-full px-3 py-4">
          <h2 className="font-semibold">{elem.name}</h2>
          <p className="test-xs mt-3">{elem.desc}</p>
          <button className={`px-4 py-1 ${elem.instocks ? "bg-blue-600" : "bg-red-600"} text-xs rounded text-zinc-100 mt-3`}>{elem.instocks ? "In Stock" : "Out of Stock"}</button>
        </div>       
      </div>
      ))}
      
    </div>
  )
}

export default Card
