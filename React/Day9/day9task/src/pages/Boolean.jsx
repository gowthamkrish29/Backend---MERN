import { useState } from "react"


const Boolean = () => {

    const [isActive , setIsActive] = useState(false)

    const handleClick =()=>{

        setIsActive(!isActive)
    }

  return (
    <>

    <div className="m-6">
        <h1 className={`text-3xl font-bold ${isActive ? "text-green-500" : "text-red-500"}`}>Status : {isActive ? "Active" : "Inactive"}</h1>

        <button onClick={handleClick} className="bg-pink-500 p-5 text-2xl font-bold rounded-4xl">Toggle Status</button>
    </div>


    </>
  )
}

export default Boolean