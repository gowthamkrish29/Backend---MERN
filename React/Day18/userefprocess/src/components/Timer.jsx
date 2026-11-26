import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

    const [count , setCount] = useState(0)

    const timerRef = useRef(null)

    useEffect(()=>{

        document.title = count

    } , [count])

    const handleStart = ()=>{

       if(timerRef.current !==null) return

       timerRef.current = setInterval(()=>{

        setCount(p => p+1)

       } ,1)

    }

    const handleStop =()=>{

        clearInterval(timerRef.current)
        timerRef.current = null

    }

    const handleReset = ()=>{

        clearInterval(timerRef.current)
        timerRef.current =null

        setCount(0)

    }

    useEffect(()=>{
        return()=>clearInterval(timerRef.current)

    } ,[])






  return (
    <>

    <div className='flex gap-20 m-10 justify-center'>

        <h1 className=' px-5 font-bold py-1 rounded-xl bg-black text-white'>COUNTER : {count}</h1>


        <button onClick={handleStart} 
        className='px-5 font-bold py-1 rounded-xl bg-black text-white'>START</button>

        <button onClick={handleStop} 
        className='px-5 font-bold py-1 rounded-xl bg-black text-white'>STOP</button>

        <button onClick={handleReset} 
        className='px-5 font-bold py-1 rounded-xl bg-black text-white'>RESET</button>
    </div>

    </>
  )
}

export default Timer