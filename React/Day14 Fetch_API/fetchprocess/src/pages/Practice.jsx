import { useEffect, useState } from "react"

const Practice = () => {

    const [product, setProduct] = useState([])

    const [serach  , setSearch] = useState("")

    const fetchData = async () => {

        try {

            const res = await fetch("https://dummyjson.com/carts?limit=8")

            const result = await res.json()

            // console.log(result);

            setProduct(result.carts)

            // console.log(result.carts.length);


            // console.log(setProduct);

        }

        catch (error) {

            console.log("Error : ", error);

        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    let copy = [...product]

    const handleSearch = (e)=>{

        setSearch(e.target.value)

    }


    if(serach){

        copy = copy.filter((e,i)=>e.title.toLowerCase().includes(serach.toLowerCase()))

    }

    
    return (
        <>

        <div className="m-10 flex font-bold text-4xl text-red-500 justify-center ">
            <h1>SUPER STORE</h1>
        </div>

        <div className="flex justify-center">

        <input type="search" placeholder="Search products..." 
        className="border-2 "
        onChange={handleSearch}/>

        </div>

            <div className="flex gap-20 flex-wrap justify-center m-10">
                {product.map((e) => (
                    <div key={e.id}>

                        {/* <h1 className="text-center">Cart ID : {e.id}</h1> */}

                        {e.products?.map((item) => (

                            <div key={item.id} className="border-2 mb-10 shadoww-2xl">

                                <img src={item.thumbnail} alt={item.title} />

                                <div className="text-sm ml-5 mb-5 font-bold">
                                    <h2>PRODUCTS: {item.title}</h2>
                                    <h3>PRICE: ${item.price}</h3>
                                    <h3>QUANTITY: {item.quantity}</h3>
                                </div>

                            </div>

                        ))}

                    </div>
                ))}
            </div>


        </>
    )
}

export default Practice