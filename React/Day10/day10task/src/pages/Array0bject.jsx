import { useState } from "react"


const ArrayofObject = () => {


  const [details, setDetails] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Bala", salary: 45000 },
    { id: 3, name: "Swetha", salary: 60000 },
    { id: 4, name: "Vijay", salary: 35000 },
    { id: 5, name: "Ananya", salary: 55000 }
  ]);


  const [tot ,  setTot] = useState(null)

  const handleAdd = () => {

    const copy = [...details]

    const newDetail = { id: 6, name: "Yazhini", salary:75000 }

    copy.push(newDetail)

    setDetails(copy)





  }

  const handleUpdate = (upd) => {

    setDetails((p) => [...p].map((e, i) => i == upd ? { ...e, salary: 50000 } : e))

  }

  const handleDelete = (delteData) => {

    const copy = [...details]

    setDetails(copy.filter((e, i) => i !== delteData))

  }


  const handleFilter = ()=>{

    setDetails(details.filter((e)=>e.salary>40000))


  }


  const handleSum =()=>{

    setTot(details.reduce((acc , e)=>acc + e.salary,0))
  }

  const handleLength = ()=>{

    set

  }

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div className="text-2xl font-extrabold my-4">
          EMPLOYEE DETAILS
        </div>
        {details.map((e, i) => (
          <div key={i} className="bg-emerald-500 p-5 w-100 text-center text-2xl font-bold ">
            <h1 className="'">ID : {e.id}</h1>
            <h1>NAME : {e.name}</h1>
            <h1>SALARY : {e.salary}</h1>
            <button onClick={() => handleUpdate(i)} className="bg-white text-2xl p-3 rounded-2xl mx-5 my-5">UPDATE</button>
            <button onClick={() => handleDelete(i)} className="bg-white text-2xl p-3 rounded-2xl">DELETE</button>
          </div>
        ))}
      </div>

      <div className="flex  justify-center gap-20 m-10">
        <button onClick={handleAdd} className="bg-pink-500 text-2xl font-bold rounded-3xl border-4 p-3">ADD</button>

        <button onClick={handleFilter} className="bg-olive-700 text-white text-2xl font-bold rounded-3xl border-4 border-black p-3">Filter By Salary</button>

        <button onClick={handleSum} className="bg-orange-500 text-2xl font-bold rounded-3xl border-4 border-black p-3">Total Salary : {tot} </button>

       <button  onClick={handleLength} className="bg-purple-600 text-2xl font-bold p-3 rounded-3xl border-4">Number of employees : </button>
      </div>

    </>
  )
}

export default ArrayofObject