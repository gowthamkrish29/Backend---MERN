import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const [search ,setSearch] = useState("")

  const [sort , setSort] = useState("")

  const [cat , setCat] = useState("")

  const [total , setTotal] = useState(0)

  const [priceRange , setPriceRange] = useState("")

  const fetchData = async () => {

    try {

      const res = await fetch("https://dummyjson.com/products")

      const result = await res.json()

      setData(result.products)

    }

    catch (error) {

      console.log("Error : ", error);

    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  let copy = [...data]

 
  const handleSearch = (e)=>{

    setSearch(e.target.value)

  }

  if(search){

    copy = copy.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))

  }

  const handleSort = (e)=>{

    setSort(e.target.value)

  }

  if(sort === "high"){

    copy = copy.sort((a,b)=>a.price - b.price)

  }

  if(sort === "low"){

    copy = copy.sort((a,b)=>b.price - a.price)

  }

  const duplicateData = [...new Set(data.map((e,i)=>e.category))]

  const handleCategory = (e)=>{
    
    setCat(e.target.value)

  }


  if(cat){

    copy = copy.filter((e,i)=>e.category == cat)

  }


  const handleTotal=()=>{

    let tot = copy.reduce((a,c) => a + c.price , 0)

    setTotal(tot)

  }

  const handlePrice = ()=>{

    setPriceRange("below100")

  }

  if(priceRange === "below100"){

    copy = copy.filter((e)=>e.price <=100)

  }

  const handleShow = ()=>{

    setPriceRange("")

  }



  return (
    <>

      <div>

        

        <div className='flex justify-center m-10 text-2xl font-bold text-cyan-500'>
          <h1>PRODUCTS</h1>
        </div>

        <div className='flex justify-center mb-10'>

          <input type="search" placeholder='Search Product...'
           className='border-2 w-50 hover:border-red-500'
           onChange={handleSearch}/>

          <select onChange={handleSort} className='border-2 ml-5'>
            <option value="">Select One</option>
            <option value="high">Low to High</option>
            <option value="low">High to Low</option>
          </select>

          <select onChange={handleCategory} className='border-2 ml-5'>
            <option >Select One...</option>
            {duplicateData.map((e,i)=>(
              <option value={e}>{e}</option>
            ))}
          </select>

          <button onClick={handleTotal}
          className='bg-rose-500 ml-5 text-2xl px-3 py-1 rounded-2xl font-bold'
          >Total : {total.toFixed(2)}</button>

            <button onClick={handlePrice}
            className='bg-indigo-500 ml-5 text-2xl px-3 py-1 rounded-2xl font-bold'>
              $9 TO $100</button>


          <button onClick={handleShow}
          className='bg-blue-400 ml-5 text-2xl px-3 py-1 rounded-2xl font-bold'>
          Show All</button>

        </div>

        <div className='flex flex-wrap gap-10 justify-center'>

            {copy.length > 0 ? (

              copy.map((e) => (

            <div key={e.id} className='shadow-xl border-1 shadow-black  rounded-xl'>
              <div>
                <img src={e.thumbnail} alt={e.title} className=' mb-5 object-cover w-70' />
              </div>

              <div className='ml-5 font-bold text-sm'>
                <h1>S.NO : {e.id}</h1>
                <h1>NAME : {e.title}</h1>
                <h1>CATEGORY : {e.category}</h1>
                <h1>PRICE : {e.price}</h1>
                <h1>RATING : {e.rating}</h1>
              </div>

              <div className='flex justify-center'>
                <button className='mt-4 mb-5 w-50 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition'>BUY NOW</button>
              </div>

            </div>



          )) 

        ) : (
          <h1 className='text-red-500 text-4xl flex justify-center items-center font-extrabold font-mono'>No Datas Found!</h1>
        )

        }

          
        </div>

      </div>


    </>
  )
}

export default App