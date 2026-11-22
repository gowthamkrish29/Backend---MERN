import React, { useEffect, useState } from 'react'

const FetchProcess = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {

    try {

      const res = await fetch("https://dummyjson.com/recipes?limit=10");

      const result = await res.json()

      setData(result.recipes)

    }

    catch (error) {
      console.log("Error : ", error);

    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      <div>

        <div className='text-center text-4xl font-bold m-5'>
          <h1>RECIPES</h1>
        </div>


        <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5'>
          {data.map((e) => (
          <div key={e.id} className='flex flex-col justify-between rounded-xl border-t-4  border-b-4  p-4 shadow-lg'>
            <div>
              <img src={e.image} alt={e.name} className='w-full h-48 object-cover rounded-lg mb-5' />
            </div>
              
           

            <div className='space-y-1 text-sm'>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>S.NO :</span> {e.id}</h1>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>NAME :</span> {e.name}</h1>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>Cuisine :</span> {e.cuisine}</h1>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>MEAL TYPE :</span> {e.mealType}</h1>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>CALORIES :</span> {e.caloriesPerServing}</h1>
              <h1 className='text-green-500 font-bold'><span className='text-amber-400 font-bold'>RATING :</span> {e.rating}</h1>
            </div>

            <div>
              <button className='mt-4 w-full bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition'>Buy Now</button>

            </div>

          </div>

        ))}
        </div>
      </div>


    </>

  )
}

export default FetchProcess