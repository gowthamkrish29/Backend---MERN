import { useNavigate, } from "react-router-dom";

const Products = () => {


  const pro = [
    { ProductName: "Iphone", price: 250000 },
    { ProductName: "PS5", price: 80000 },
    { ProductName: "TV", price: 35000 },
    { ProductName: "Bike", price: 350000 }
  ];

  const navigate = useNavigate()


  const buyNow = (productid) => {

    navigate(`/productlist/${productid}`)

  }



  return (
    <>

      <div className="bg-amber-300 flex justify-evenly items-center h-screen">

        {pro.map((e, i) => (
          <div key={i} className="bg-white rounded-2xl p-10 flex flex-col items-center ">

            <h2 className="text-3xl font-bold my-1">Product :{e.ProductName}</h2>
            <h4 className="my-1 font-semibold">Price :{e.price}</h4>
            <button onClick={() => buyNow(i)} className="bg-blue-500 p-3 rounded-2xl font-bold my-4">Buy Now</button>
  
          </div>
        ))}

      </div>

      

    </>
  )
}

export default Products