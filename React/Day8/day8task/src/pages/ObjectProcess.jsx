import React, { useState } from 'react'

const ObjectProcess = () => {

  const [obj, setObj] = useState({ name: "Gowtham", role: "Developer", salary: 25000 })


  const handleClick = () => {

    setObj({ ...obj, age: "20" })

    

    // setObj({...obj,Age:"20"})

  }

  const handleUpdate = () => {

    setObj({ ...obj, salary: "45000" })

  }

  const handleDelete = () => {

    const {role , ...data} = obj

    setObj(data)

  }

  return (
    <>

      <div className='bg-black h-100 flex justify-center items-center '>

        <div className='flex flex-col text-3xl font-bold '>

          <p className='text-orange-500'><b className='text-white font-mono'>NAME :</b> {obj.name}</p>
          <p className='text-orange-500'><b className='text-white font-mono'>ROLE :</b> {obj.role}</p>
          <p className='text-orange-500'><b className='text-white font-mono'>SALARY :</b> {obj.salary}</p>
          <p className='text-orange-500'><b className='text-white font-mono'>AGE :</b> {obj.age}</p>

        </div>

      </div>

      <div className='flex justify-center gap-10 m-4 '>
        <button onClick={handleClick} className='bg-black p-3 rounded-2xl font-bold text-white  hover:text-green-500'>Click To Add</button>
        <button onClick={handleUpdate} className='bg-black p-3 rounded-2xl font-bold text-white hover:text-blue-500'>Click To Upadte</button>
        <button onClick={handleDelete} className='bg-black p-3 rounded-2xl font-bold text-white hover:text-red-500'>Click To Delete</button>
      </div>






    </>

  )
}

export default ObjectProcess