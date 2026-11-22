import { useState } from "react"

const StateProcess = () => {

  const [obj, setObj] = useState({ userName: "", userAge: "", userDob: "", status: "Pending" })

  const [saveData, setSaveData] = useState([])

  const [edit, setEdit] = useState(null)

  const handleChange = (w) => {

    setObj({ ...obj, [w.target.name]: w.target.value })

  }


  const handleAdd = (e) => {

    e.preventDefault()

    if (!obj.userName || !obj.userAge || !obj.userDob) {
      alert("Please all the fields")
      return
    }

    if (obj.userName.trim() === "") {
      alert("task cannot be empty")
      return
    }


    const copy = [...saveData]

    copy.push(obj)

    setSaveData(copy)

    alert("Data Successfully Added")


    setObj({ userName: "", userAge: "", userDob: "" })


  }

  const handleEdit = (element, eid) => {

    setObj(element)

    setEdit(eid)

  }

  const handleDelete = (did) => {

    setSaveData((p) => [...p].filter((e, i) => i !== did))

  }

  const handleUpadte = (e) => {

    e.preventDefault()

    setSaveData((p) => [...p].map((e, i) => i == edit ? { ...e, ...obj } : e))

    setObj({ userName: "", userAge: "", userDob: "" })

    setEdit(null)

  }

  const handleCancel = () => {
    setObj({ userName: "", userAge: "", userDob: "", status: "Pending" });

    setEdit(null)
  }



  return (
    <>

      <form action="" className="m-10 flex justify-center flex-col items-center">

        <input type="text" placeholder="Enter your name" value={obj.userName} name="userName" onChange={handleChange} className="border-2 font-bold mx-10 my-2 w-50" />

        <input type="number" placeholder="Enter your age" value={obj.userAge} name="userAge" onChange={handleChange} className="border-2 font-bold mx-10 my-2 w-50" />

        <input type="date" placeholder="Enter your Date of Birth" value={obj.userDob} name="userDob" onChange={handleChange} className="border-2 font-bold  my-2 w-50" />

        <select name="status"
          value={obj.status}
          onChange={handleChange} className="border-2 font-bold mx-10 my-2 w-50">
          <option value="Pending">Pending</option>
          <option value="In progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>



        {edit == null ? (<button onClick={handleAdd} className="mx-10 my-3 text-xl font-bold px-3 py-2 rounded-2xl bg-red-500">
          ADD DETAILS</button>) : (
          <>
            <button onClick={handleUpadte} className="mx-10 my-3 text-xl font-bold px-3 py-2 rounded-2xl bg-red-500">
              UPDATE DETAILS</button> <button className="bg-gray-800 mx-10 my-3 text-2xl font-bold px-3 py-2 rounded-2xl text-white" onClick={handleCancel}>CANCEL</button>
          </>
        )}

      </form>

      <div className="m-10 flex gap-20 justify-center items-center">
        {saveData.map((e, i) => (
          <div key={i} className="bg-amber-400 w-100 text-center font-bold p-5 flex flex-col gap-5">

            <h1>NAME : {e.userName}</h1>

            <h1>AGE : {e.userAge}</h1>

            <h1>DOB : {e.userDob}</h1>

            <h1>STATUS : {e.status}</h1>

            <div className="flex gap-10 justify-center m-2">



              <button onClick={() => handleEdit(e, i)} className="bg-black text-white px-5 py-1 rounded-2xl">EDIT</button>

              <button onClick={() => handleDelete(i)} className="bg-black text-white px-5 py-1 rounded-2xl">DELETE</button>

            </div>

          </div>
        ))}
      </div>



    </>
  )
}

export default StateProcess