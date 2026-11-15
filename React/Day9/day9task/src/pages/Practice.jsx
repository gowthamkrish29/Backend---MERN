import { useState } from "react"

const Practice = () => {

    const [login , setLogin] = useState(true)

    const isStudent = true;

    const marks = null   ;


    const handleClick =()=>{

        setLogin(!login)
    }

  return (
    <>


    <div>
        <h1 className="text-orange-500 font-bold text-6xl m-10 ">User Details</h1>

        <h1 className={`text-3xl font-bold m-10 ${login ? "text-green-600" : "text-red-500"}`}>
           <b className="text-black ">DETAILS :</b>  { login ?  "Welcome  User" : "Please Login"} 
        </h1>

        <button onClick={handleClick} className="bg-indigo-400 font-mono border-3 p-3 font-bold rounded-2xl text-2xl m-10 hover:bg-indigo-600">See Details</button>
    </div>

    <div>
        {isStudent && <h1>Welcome Student</h1>}
    </div>

    <div>
        {marks ?? "not available"}
    </div>
    </>

  )
}

export default Practice