import React, { useState } from 'react'

const ArrayofObject = () => {

    const [arrObj, setArrObj] = useState(

        [
            { name: "Gowtham", age: "20", salary: "45000", place: "Barcelona" },
            { name: "Victor", age: "24", salary: "5000", place: "Madrid" },
            { name: "Martin", age: "26", salary: "10000", place: "Paris" },
            { name: "Cooper", age: "30", salary: "15000", place: "Milan" },
            { name: "Walter", age: "51", salary: "285000", place: "Miami" }
        ]

    );



    const [tot , setTot] = useState(null)


    const handleAdd =()=>{

        const copy = [...arrObj]

        const new1 = {name:"Mike" , age:"56" , salary:"10000" , place:"Madurai"}

        copy.push(new1)

        setArrObj(copy)

    }


    const handleUpdate = (uid)=>{

        setArrObj((p)=>[...p].map((e,i)=>i==uid?{...e , salary:"20000"}:e))
    }

    const handleDelete = (deleteId)=>{

        const copy = [...arrObj]


        setArrObj(copy.filter((e,i)=>i!==deleteId))

    }


    const hanldeFilter=()=>{

        setArrObj(arrObj.filter((e)=> e.salary > 20000))

    }

    const handleSum=()=>{

        setTot(arrObj.reduce((acc ,e)=>acc + Number(e.salary),0)) 

    }

    return (
        <>

        <div>
            {arrObj.map((e,i)=>(
                <div key={i} className='bg-blue-900 m-3 p-3 text-white font-bold w-screen text-center flex gap-20 justify-center items-center'>
                    <h1>NAME : {e.name}</h1>
                    <h1 >AGE : {e.age}</h1>
                    <h1 >SALARY : {e.salary}</h1>
                    <h1 >PLACE : {e.place}</h1>

                    <button onClick={()=>handleUpdate(i)} className='bg-black p-2 text-white m-5 text-2xl px-4 font-bold hover:bg-amber-300 hover:text-black rounded-2xl'>Update</button>

                    <button  onClick={()=>handleDelete(i)} className='bg-black p-2 text-white m-5 text-2xl px-4 font-bold hover:bg-red-500 hover:text-black rounded-2xl'>Delete</button>
                </div>
            ))}

            <button onClick={handleAdd} className='bg-black p-2 text-white  m-15 text-2xl px-4 font-bold'>Add</button>

            <button onClick={hanldeFilter} className='bg-black p-2 text-white  m-15 text-2xl px-4 font-bold'>Filter by Salary</button>

            <button onClick={handleSum} className='bg-black p-2 text-white  m-15 text-2xl px-4 font-bold'>Calculate Total : {tot}</button>
        </div>


        </>

    )
}

export default ArrayofObject