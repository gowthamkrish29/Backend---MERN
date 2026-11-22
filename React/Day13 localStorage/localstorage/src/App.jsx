import { useEffect, useState } from "react"

const App = () => {

  const [datas, setDatas] = useState({ userName: "", userAge: "", userCity: "" })

  const [addData, setAddData] = useState([])

  const [edit, setEdit] = useState(null)

  const handleChange = (e) => {


    e.preventDefault()

    setDatas((p) => ({ ...p, [e.target.name]: e.target.value }))

  }

  const handleAdd = (e) => {

    e.preventDefault()

    if (!datas.userName || !datas.userAge || !datas.userCity) {
      alert("Please fill the form")
      return
    }

    const updatedData = [...addData, datas]

    setAddData(updatedData)

    localStorage.setItem("mydb", JSON.stringify(updatedData))

    alert("Data added successfully")

    setDatas({ userName: "", userAge: "", userCity: "" })

  }

  const getData = () => {

    let getLocalData = JSON.parse(localStorage.getItem("mydb")) || []

    console.log(getLocalData);

    setAddData(getLocalData)

    // localStorage.setItem("mydb", JSON.stringify(updatedData))



  }

  const handleDelete = (did) => {

    const updatedData = addData.filter((e, i) => i !== did)

    setAddData(updatedData)

    // localStorage.setItem("mydb", JSON.stringify(updatedData))


  }


  const handleEdit = (element, eid) => {

    setDatas(element)

    setEdit(eid)

  }

  const handleUpdate = (e) => {

    e.preventDefault()

    const updatedData = addData.map((e, i) => i === edit ? datas : e)

    setAddData(updatedData)

    localStorage.setItem("mydb", JSON.stringify(updatedData))

    setDatas({ userName: "", userAge: "", userCity: "" })

    setEdit(null)

    alert("Data updated successfully")


  }



  const handleCancel = (e) => {

    e.preventDefault()

    setDatas({ userName: "", userAge: "", userCity: "" })

    setEdit(null)

  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>

      <form action="" >

        <div className="flex justify-center ">

          <input type="text" placeholder="Enter your Name"
            name="userName"
            value={datas.userName}
            onChange={handleChange}
            className="w-80 m-10 border-2 font-bold text-center" />

          <input type="number" placeholder="Enter your Age"
            name="userAge"
            value={datas.userAge}
            onChange={handleChange}
            className="w-50 m-10 border-2 font-bold text-center" />

          <input type="text" placeholder="Enter your City"
            name="userCity"
            value={datas.userCity}
            onChange={handleChange}
            className="w-50 m-10 border-2 font-bold text-center" />

          
            {edit == null ? (<button className="text-blue-500  hover:text-blue-900 font-extrabold rounded-xl"
              onClick={handleAdd}>ADD DETAILS</button>) : (<> <button className="text-orange-500  hover:text-orange-800 font-extrabold rounded-xl mx-10"
                onClick={handleUpdate}>UPDATE DETAILS</button>

                <button className="text-emerald-400 hover:text-emerald-800 font-extrabold rounded-xl"
                  onClick={handleCancel}>CANCEL</button> </>)}
         



        </div>

        <div className="grid grid-cols-1 gap-6 font-bold lg:grid-cols-3 px-20 text-center m-10">
          {addData.map((e, i) => (
            <div key={i} className="bg-amber-400 text-black px-10 py-5 rounded-2xl">
              <h1 className="my-2">NAME : {e.userName}</h1>
              <h1 className="my-2">AGE : {e.userAge}</h1>
              <h1 className="my-2">CITY : {e.userCity}</h1>
              <button type="button" onClick={() => handleEdit(e, i)} className="bg-white  text-black font-bold px-3   mx-5 hover:bg-blue-800">EDIT</button>
              <button type="button" onClick={() => handleDelete(i)} className="bg-white  text-black font-bold px-3   mx-5 hover:bg-red-500">DELETE</button>
            </div>
          ))}
        </div>


      </form>




    </>
  )
}

export default App