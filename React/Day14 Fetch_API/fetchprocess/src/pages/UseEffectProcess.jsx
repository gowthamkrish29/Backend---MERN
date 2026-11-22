import React, { useEffect, useState } from 'react'

const UseEffectProcess = () => {

    const [count , setCount] = useState(0)

    const [name , setName ] = useState("Gowtham")

    useEffect(()=>{

        localStorage.setItem("UserName" , name)

    } , [name])

    useEffect(()=>{
        console.log("Component Rendered");

        document.title = `Count: ${count}`

        
    } ,[count])

    useEffect(()=>{

        const timer = setInterval(()=>{
            console.log("HELLO");
            
        } , 5000)

        return ()=>{
            clearInterval(timer)
        }

    } , [])



  return (
    <>  

    <div>

        <h1 className='m-10 font-bold'>COUNT : {count}</h1>

        <button className='bg-red-500 text-xl px-4 m-10 py-1 font-bold' onClick={()=> setCount(count + 1)}>INCREASE</button>
    </div>

    <div>
        <h1 className='m-10 font-bold'>NAME : {name}</h1>

        <button className='bg-emerald-500 text-xl px-4 m-10 py-1 font-bold ' onClick={()=> setName("Krish")}>Change Name</button>
    </div>



    </>
  )
}

export default UseEffectProcess