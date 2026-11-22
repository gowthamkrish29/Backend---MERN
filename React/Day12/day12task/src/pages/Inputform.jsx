import React, { useState } from 'react'

const Inputform = () => {

    const [data, setData] = useState("")

    const [showData, setShowData] = useState([])

    const [editData , setEditData] = useState(null)

    const handleChange = (e) => {

        setData(e.target.value)


    }

    const handleShow = () => {

        if (!data) {
            alert("Please fill the form")
            return
        }

        const copy = [...showData]

        copy.push(data)

        setShowData(copy)

        setData("")


    }


    const handleEdit =(element , id)=>{


        setData(element)

        setEditData(id)



    }

    const handleDelete=(d)=>{

    const copy = [...showData]

    const deleteData = copy.filter((e,i)=>i!==d)
    
    setShowData(deleteData)

    


    }

    const handleUpdate = ()=>{

        setShowData((p)=>[...p].map((e,i)=>i == editData ? data : e))

        setData("")

        setEditData(null)

       
        
    }

    return (
        <>

            <div>
                <input type="text" onChange={handleChange} className='border-3 w-100 m-20 text-blue-500 font-bold' value={data} />

                {editData==null?<button onClick={handleShow} className='bg-amber-400 hover:bg-amber-600 hover:text-white border-3  px-8 py-2 text-2xl font-bold rounded-3xl'>Add</button>:<button onClick={handleUpdate} className='bg-amber-400 px-8 py-2 text-2xl font-bold rounded-3xl'>Update</button>}
                
            </div>

            <div className='flex flex-col mx-20 gap-20 text-center w-200 py-10 '>
                {showData.map((e, i) => (
                    <div key={i}>
                        <h1 className='text-3xl font-bold m-2'>{e}</h1>
                        <div className='flex gap-10 text-center justify-center'>
                            <button onClick={()=>handleEdit(e,i)} className='bg-green-500 px-6 text-black rounded-2xl p-1 text-2xl  font-bold'>EDIT</button>
                            <button onClick={()=>handleDelete(i)} className='bg-red-500 px-6 text-black rounded-2xl p-1 text-2xl  font-bold'>DELETE</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Inputform