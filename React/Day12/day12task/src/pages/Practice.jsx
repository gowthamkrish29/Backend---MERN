import { useState } from "react"
import { data } from "react-router-dom"

const Practice = () => {

    const [datas, setDatas] = useState("")

    const [addData, setAddData] = useState([])

    const [editData, setEditData] = useState(null)


    const handleChange = (p) => {

        setDatas(p.target.value)


    }

    const handleAdd = () => {

        if (!datas) {
            alert("Please Fill the form")
            return
        }

        const copy = [...addData]

        copy.push(datas)

        setAddData(copy)

        setDatas("")


    }

    const handleEdit = (elemnet, eid) => {

        setDatas(elemnet)

        setEditData(eid)


    }

    const handleDelete = (did) => {

        const copy = [...addData]

        const deleteData = copy.filter((e, i) => i !== did)

        setAddData(deleteData)

    }


    const handleUpdate = () => {

        setAddData((p) => [...p].map((e, i) => i == editData ? datas : e))

        setDatas("")

        setEditData(null)

    }


    return (
        <>

            <div className="text-5xl font-bold text-red-500 text-center m-10">
                TODO LIST
            </div>

            <div>
                <input type="text" placeholder="Fill the form"
                    className="border-3 w-100 font-bold text-2xl mx-10 my-20"
                    value={datas} onChange={handleChange} />

                {editData == null ? <button className="bg-blue-500 hover:bg-blue-650 hover:text-black  border-3 px-10 py-2 
                rounded-2xl text-2xl font-bold"
                    onClick={handleAdd}>Add Task</button> : <button className="bg-blue-500 border-3 px-10 py-2 
                rounded-2xl text-2xl font-bold"
                        onClick={handleUpdate}>Update Task</button>}





            </div>

            {/* <h1 className="w-100 font-bold text-2xl mx-10 my-2">{datas}</h1> */}

            <div className="flex gap-20 mx-20 ">
                {addData.map((e, i) => (
                    <div key={i}>
                        <h1 className="text-2xl font-bold">TASKS : {e}</h1>
                        <button onClick={() => handleEdit(e, i)} className="bg-green-500 px-4 p-1 text-2xl font-bold">EDIT</button>
                        <button onClick={() => handleDelete(i)} className="bg-red-500 px-4 p-1 text-2xl font-bold mx-5">DELETE</button>
                    </div>
                ))}

            </div>



        </>
    )
}

export default Practice