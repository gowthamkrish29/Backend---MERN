import React, { useState } from 'react'

const Array = () => {


    const [arr, setArr] = useState(["Gowtham", "Author", "Victor", "Krish", "Walter"])


    const handleClick = () => {

        let copy = [...arr]

        copy.push("Jesse")

        setArr(copy)


    }


    const handleUpdate = (upd) => {

        let copy = [...arr]

        copy[upd] = "Mike"

        setArr(copy)
    }

    const handleDelete = (del) => {

        let copy = [...arr]

        const deleteData = copy.filter((e, i) => i !== del)

        setArr(deleteData)
    }



    return (
        <>

            <div className='bg-black h-screen flex flex-col items-center text-center justify-center'>

                <div >
                    <h1 className='text-red-500 text-4xl font-bold my-5 px-5'>Array Process</h1>

                    <h3 className='text-white text-2xl'> Adding | Update | Delete</h3>
                </div>

                

                {arr.map((e, i) => (
                    <div key={i}>
                        <p className='m-6 text-amber-500 text-3xl font-bold'>{e}</p>
                        <div className='flex gap-10 mx-4 my-4'>
                            <button onClick={() => handleUpdate(i)} className="bg-white rounded  p-1 text-black w-30">Update</button>
                            <button onClick={() => handleDelete(i)} className="bg-white rounded  p-1 text-black w-30">Delete</button>
                        </div>
                    </div>

                ))}

                <button onClick={handleClick} className='bg-red-500 text-2xl p-3 font-bold rounded-2xl'>Click To Add</button>
            </div>

            

        </>
    )
}

export default Array