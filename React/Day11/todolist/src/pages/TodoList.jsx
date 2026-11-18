import React, { useState } from 'react'

const TodoList = () => {

    const [datas, setDatas] = useState("")

    const [newData , setNewData] = useState([])


    const handleChange = (e) => {

        setDatas(e.target.value)

    }


    const handleAdd =()=>{

        if(!datas){
            alert("Please enter a value")
        }

        const copy = [...newData]

        copy.push(datas)

        setNewData(copy)

        setDatas("")



    }



    return (
        <>


            <div>
                <input value={datas} type="text" className='border-3 m-20 w-100' onChange={handleChange} />

                <button className='bg-emerald-600 hover p-4  text-3xl font-bold rounded-2xl' onClick={handleAdd}>ADD</button>


                <div>
                    {newData.map((e,i)=>(
                        <div key={i}>
                            <h1 className='m-20 text-2xl font-bold'>{e}</h1>
                        </div>
                    ))}
                </div>

            </div>

        </>



    )
}

export default TodoList