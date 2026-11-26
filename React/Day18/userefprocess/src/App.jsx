import React, { useEffect, useRef, useState } from 'react'
import Timer from './components/Timer'

const App = () => {

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const ageRef = useRef(null)

  const [showData , setShowData] = useState([]);

  const getDatas = ()=>{

    const datas = JSON.parse(localStorage.getItem("useRefData")) || []

    setShowData(datas)
    
  }

  useEffect(()=>{
    getDatas()
  } , [])

  const handleSubmit = (w)=>{

    w.preventDefault();

    if(!nameRef.current.value || !emailRef.current.value || !ageRef.current.value ){
      alert("Please fill the form")
      return
    }

    const datas = {id:Date.now(),username:nameRef.current.value,
      useremail:emailRef.current.value,
      userage : ageRef.current.value
    }


    const oldDatas = JSON.parse(localStorage.getItem("useRefData")) || []

    oldDatas.push(datas)

    localStorage.setItem("useRefData" , JSON.stringify(oldDatas))

    getDatas();

    nameRef.current.value  ="";
    emailRef.current.value ="";
    ageRef.current.value = "";

    nameRef.current.focus()


  }

  const handleDelete = (id)=>{

    const oldDatas = JSON.parse(localStorage.getItem("useRefData")) || []

    const result = oldDatas.filter((e)=>e.id !== id);

    localStorage.setItem("useRefData" , JSON.stringify(result))

    getDatas()

  }

  return (
    <>

      <div className='flex flex-col items-center m-10'>
        <div>
          <h1 className='text-4xl font-bold mb-10'>STUDENT  DETAILS</h1>
        </div>

        <form className='flex gap-10' onSubmit={handleSubmit}>

          <input type="text" placeholder='Enter Name'
            ref={nameRef}
            required
            className='border-2 w-50 font-bold' />

          <input type="email" placeholder='Enter Email'
            ref={emailRef}
            required
            className='border-2 w-50 font-bold' />

          <input type="number" placeholder='Enter Age'
            ref={ageRef}
            required
            className='border-2 w-50 font-bold' />

            <button type="submit"
          className='bg-teal-400 lg hover:cursor-pointer 
          px-3 py-1 font-bold rounded-xl '>Add Data</button>

        </form>


      </div>

      
        <div className='flex flex-col gap-10 items-center'>
          <h2 className='text-2xl font-bold'>Total number of students : {showData.length}</h2>

        <div className='font-bold flex flex-wrap gap-15 justify-center items-center '>
          {showData.map((e)=>(

            <div key={e.id} >

              <div className='text-center bg-rose-500 flex items-center p-5 flex-col gap-3 rounded-3xl'>
                <p>USERNAME : {e.username}</p>
              <p>USEREMAIL : {e.useremail}</p>
              <p>USERAGE :{e.userage}</p>

              <button
              onClick={()=>handleDelete(e.id)}
              className='bg-black text-white text-md  hover:cursor-pointer 
          px-3 py-1 font-semibold rounded-xl '>Delete</button>

              </div>

              

            </div>

          ))}
        </div>
     
        </div>


          <Timer/>

    </>

  )
}

export default App