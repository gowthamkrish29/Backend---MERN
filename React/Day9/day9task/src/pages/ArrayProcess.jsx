import { useState } from "react"


const ArrayProcess = () => {

  const [arr, setArr] = useState(["Mern", "HTML", "CSS", "JS", "TAILWIND"])


  const handleClick = () => {

    let copy = [...arr]

    copy.push("REACT")

    setArr(copy)

  }


  const handleUpadte = (eid) => {

    let copy = [...arr]

    copy[2] = "Python"

    setArr(copy)

    // setArr(copy.map((e,i)=>i==eid?"Python":e))
  }

  const handleDelete =()=>{

    //   let copy = [...arr]

     
    //  const deleteData = copy.filter((e,i)=>i !== did)

    //  setArr(deleteData)


    const deletData = arr.filter((e)=> e !== "Mern")

    setArr(deletData)

  }

  return (
    <>

      <div className="flex flex-col justify-center items-center">

        {arr.map((e, i) => (

          <div key={i} className="text-2xl font-bold p-3">

            <h1 className="bg-blue-500 w-40  p-3 text-center rounded-2xl">{e}</h1>



          </div>

        ))}


        <div className="flex gap-15">

          <button onClick={handleClick} className="bg-black rounded  p-1 text-white w-30">Click To Add</button>

          <button onClick={handleUpadte} className="bg-black text-white rounded  p-1 w-30">Click To Update</button>

           <button onClick={handleDelete} className="bg-black text-white rounded  p-1 w-30">Click To Delete</button>


        </div>
      </div>



    </>
  )
}

export default ArrayProcess