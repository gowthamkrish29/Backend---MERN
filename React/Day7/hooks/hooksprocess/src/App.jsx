import { useState } from "react";


const App = () => {


  const [count, setCount] = useState(0);

  const [word  , setWord ] = useState("React")

  return (
    <>

        <div>

          <h1 className="bg-black text-white p-4 font-bold text-2xl m-10">Count : {count}</h1>


         <div className="flex  gap-20 my-20 p-10">
           <button onClick={()=>setCount(count + 1)} className="bg-green-600 text-white text-2xl font-semibold p-5 rounded-2xl">Increase</button>

          <button onClick={()=>setCount(count - 1)} className="bg-orange-500 text-white text-2xl font-semibold p-5 rounded-2xl">Decrease</button>

          <button onClick={()=>setCount(count * 2)} className="bg-amber-400 text-white text-2xl font-semibold p-5 rounded-2xl">Multiply x 2</button>

          <button onClick={()=>setCount(0)} className="bg-red-500 text-white text-2xl font-semibold p-5 rounded-2xl">Reset</button>
         </div>
        </div>

      <div className="m-5 text-2xl">

        <h1 className= "text-red-600 font-bold">{word}</h1>

        <button onClick={()=>setWord("Node")} className="bg-pink-400 p-1 font-bold  rounded-2xl">Change Text</button>
      </div>

    </>
  )
}

export default App