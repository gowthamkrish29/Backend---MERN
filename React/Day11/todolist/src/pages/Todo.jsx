import { useState } from "react"

const Todo = () => {

    const [todo, setTodo] = useState("")

    const [addData , setAddData] = useState([])

    const handleChange = (e) => {


        setTodo(e.target.value)


    }


    const handleaAdd =()=>{

        

        if(!todo){
            alert("Please fill the form")
            return
        }

        const copy = [...addData]

        copy.push(todo)

        setAddData(copy)

        setTodo("")

     





    }



    return (
        <>

            <div>

                

                <input className="border-2 m-10 w-80" value={todo} type="text" onChange={handleChange} />

                <button className="bg-black text-white p-4 hover:bg-blue-600 text-2xl font-bold rounded-2xl " onClick={handleaAdd}>Add</button>

                {/* <h1 className="text-2xl m-10 font-bold">{todo}</h1> */}

                <div>
                    {addData.map((e,i)=>(
                        <div key={i}>
                            <h2 className="">{e}</h2>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Todo