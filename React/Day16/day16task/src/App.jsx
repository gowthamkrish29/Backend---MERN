import React, { useEffect, useState } from 'react'

const App = () => {

  const [show, setShow] = useState([])

  const [search, setSearch] = useState("")

  const [sort, setSort] = useState("")

  const [cat, setCat] = useState("")

  const [total, setTotal] = useState(0)

  const [priceRange, setPriceRange] = useState("")


  const fetchData = async () => {

    try {

      const res = await fetch("https://dummyjson.com/products")

      const result = await res.json()

      setShow(result.products)

    }

    catch (error) {

      console.log("ERROR : ", error);

    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  let copy = [...show]


  const handleSearch = (e) => {

    setSearch(e.target.value)

  }

  if (search) {

    copy = copy.filter((e, i) => e.title.toLowerCase().includes(search.toLowerCase()))

  }

  const handleSort = (e) => {

    setSort(e.target.value)

  }

  if (sort === "high") {

    copy = copy.sort((a, b) => a.price - b.price)

  }

  if (sort === "low") {

    copy = copy.sort((a, b) => b.price - a.price)

  }

  const duplicatValue = [...new Set(show.map((e, i) => e.category))]


  const handleCategory = (e) => {

    setCat(e.target.value)

  }

  if (cat) {

    copy = copy.filter((e, i) => e.category == cat)

  }


  const handlePrice = () => {

    setPriceRange("above100")

  }

  if (priceRange === "above100") {

    copy = copy.filter((e) => e.price > 100)

  }

  const handleFisrt = () => {

    setPriceRange("9-100")

  }


  if (priceRange === "9-100") {

    copy = copy.filter((e) => e.price >= 9 && e.price <= 100)

  }




  const handleTotal = () => {

    let tot = copy.reduce((a, c) => a + c.price, 0)

    setTotal(tot)

  }

  const handleShowAll = () => {
    setPriceRange("")
  }


  return (
    <>


      <div>

        <div className='block w-fit mx-auto my-8 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-800 bg-clip-text text-transparent text-4xl font-bold'>
          SUPER BUY
        </div>

        <div className='ml-10 mb-10 flex gap-10 justify-center'>

          <input type="search"
            className='border-2 w-50 hover:border-red-500 '
            placeholder='Search products...'
            onChange={handleSearch} />

          <select onChange={handleSort} className='border-2'>
            <option value="">Select One...</option>
            <option value="high">Low to High ...</option>
            <option value="low">High to Low...</option>
          </select>


          <select onChange={handleCategory} className='border-2'>
            <option value="">Select One...</option>
            {duplicatValue.map((e, i) => (
              <option key={e} value={e}>{e}</option>
            ))}
          </select>

          <button onClick={() => handleFisrt()}
            className='bg-black text-white px-2 rounded-xl py-1 font-bold '>$9 to $100</button>

          <button onClick={() => handlePrice()}
            className='bg-lime-400 border-2 px-2 rounded-xl py-1 font-bold '>Above $100</button>

          <button onClick={handleTotal}
            className='bg-violet-400 border-2 px-2 rounded-xl py-1 font-bold '>Total : {total.toFixed(2)}</button>

          <button onClick={handleShowAll}
            className='bg-teal-500 border-2 px-2 rounded-xl py-1 font-bold'>Show All</button>

        </div>

        <div className='flex flex-wrap gap-10  justify-center'>

          {copy.length > 0 ? (


            copy.map((pro) => (

              <div key={pro.id} className='w-75 shadow-lg border rounded-xl p-3'>


                <div>
                  <img src={pro.thumbnail} alt={pro.title} className='w-full h-50 object-contain' />
                </div>

                <div className='ml-5 font-bold text-sm'>
                  <h2>PRODUCT: {pro.title}</h2>
                  <h3>PRICE: ${pro.price}</h3>
                  <h3>CATEGORY: {pro.category}</h3>
                </div>

                <div className='flex justify-center items-center'>
                  <button className='mt-4 mb-5 w-50 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition'>BUY NOW</button>
                </div>

              </div>

            ))
          ) : (

            <h1 className='text-2xl text-red-500 font-bold'>
              No Data Found!
            </h1>

          )}

        </div>


      </div>



    </>
  )
}

export default App