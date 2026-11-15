import { useState } from "react"


const ObjectProcess = () => {

  const [obj, setObj] = useState({ name: "Gowtham", age: "20", city: "Chennai", role: "Developer", salary: "25000" });

  const handleClick = () => {

    const copy = {...obj , gender:"Male"}

    setObj(copy)
  }

  const handleUpdate = () => {

    setObj({...obj , salary:"45000"})


  }

  const handleDelete=()=>{

    const {city , ...data} = obj

    setObj(data)
  }



  return (

    <>

      <div className="bg-red-500 w-150 font-bold text-3xl text-center m-3 p-5">

        <h1>NAME : {obj.name}</h1>
        <h1>AGE : {obj.age}</h1>
        <h1>CITY : {obj.city}</h1>
        <h1>ROLE : {obj.role}</h1>
        <h1>SALARY : {obj.salary}</h1>
        <h1>GENDER : {obj.gender}</h1>


        <div className="flex gap-20 text-xl m-5">
          <button onClick={handleClick} className='bg-black p-1 rounded  w-30 text-white'>Add</button>

          <button onClick={handleUpdate} className='bg-black p-1 rounded w-30 text-white'>Update</button>

          <button onClick={handleDelete} className='bg-black p-1 rounded w-30 text-white'>Delete</button>
        </div>


      </div>



    </>


  )
}

export default ObjectProcess