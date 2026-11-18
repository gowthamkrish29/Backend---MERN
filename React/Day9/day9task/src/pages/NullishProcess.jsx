import React, { useState } from 'react'

const NullishProcess = () => {

    const obj = {
        name: "Gowtham",
        age: 20, salary: "₹40000",
        city: null,
        phone: undefined
    }

    const [count , setCount] = useState(10);
    const [result , setResult] = useState("")


    const handleNumber = ()=>{

        if(count%2===0){
            setResult  ("Even")
        } else{
            setResult  ("Odd")
        }

    }




    return (
        <>
            <div>

                <h1 className='m-4 text-6xl font-bold'>User Details</h1>

                <div className='m-3 p-3 text-2xl font-bold text-blue-500'>
                    <p><b className='text-black'>NAME :</b> {obj.name ?? "Not Available"}</p>
                    <p><b className='text-black'>AGE :</b> {obj.age ?? "Not Available"}</p>
                    <p><b className='text-black'>CITY :</b> {obj.city ?? "Not Available"}</p>
                    <p><b className='text-black'>PHONE :</b> {obj.phone ?? "Not Available"}</p>
                    <p><b className='text-black'>SALARY :</b> {obj.salary ?? "Not Available"}</p>
                </div>

            </div>

            <div>
             
                    <h1 className='bg-black w-50 p-3 text-2xl font-serif font-bold text-white text-center mx-10 my-10 border-6 border-red-500 rounded-2xl'>Count : {count}</h1>

                <div className='p-6 m-4 text-2xl font-bold flex gap-10'>
                    <button onClick={()=>setCount(count + 5)} className='bg-green-500 p-3 rounded-2xl text-center'>Increment</button>
                    <button onClick={()=>setCount(count - 2)} className='bg-red-500 p-3 rounded-2xl text-center'>Decrement</button>
                    <button onClick={()=>setCount(count * 3)} className='bg-amber-500 p-3 rounded-2xl text-center'>Multiply</button>
                    <button onClick={()=>setCount(10)} className='bg-gray-700 p-3 text-white rounded-2xl text-center'>Reset</button>

                    <button onClick={handleNumber} className={` p-3 text-white rounded-2xl text-center ${result ?"bg-green-600 text-black"  : "bg-red-500 text-black" }`}>Result : {result}</button>
                </div>
                    
                
            </div>

        </>
    )
}

export default NullishProcess