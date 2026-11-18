import { useNavigate } from "react-router-dom";


const Home = () => {

    const products = [
        { proName: "Bottle", price: 200 },
        { proName: "Bag", price: 2600 },
        { proName: "Shirt", price: 1199 },
        { proName: "Shoe", price: 999 },
        { proName: "T-shirt", price: 599 }
    ];


    const navigate = useNavigate()

    const buyNow = (id)=>{
        navigate(`/products/${id}`)
    }

    return (

        <>

        <div className="bg-green-400 flex justify-evenly items-center h-screen">

            {products.map((e, i )=>(
                <div key={i} className="bg-white rounded-2xl p-10 flex flex-col items-center">


                <h1>Product : {e.proName}</h1>
                <h2>Price : {e.price}</h2>
                <button onClick={()=>buyNow(i)} className="bg-blue-500 p-3 rounded-2xl font-bold my-4">Buy Now</button>
                </div>
            ))}


        </div>


        </>


    )
}

export default Home