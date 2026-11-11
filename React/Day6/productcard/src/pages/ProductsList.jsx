import { useLocation, useNavigate, useParams } from "react-router-dom";


const ProductsList = () => {


  const pro = [
    { ProductName: "Iphone", price: 250000 },
    { ProductName: "PS5", price: 80000 },
    { ProductName: "TV", price: 35000 }, 
    { ProductName: "Bike", price: 350000 }
  ];


  
const location = useLocation()


console.log(location);



  const navigate = useNavigate()

  const {productid} = useParams()

  let oneProduct = pro.find((e,i)=>i==productid);


  const backButton = ()=>{
    navigate(-1)
  }


  return (
    <>

      <div>
        <button className="bg-blue-500 p-3 text-3xl m-4 font-bold" onClick={backButton}>Back</button>
      </div>

      <div className="m-5 font-bold">

        <h2>Product  : {oneProduct.ProductName}</h2>
        <h2>Price : {oneProduct.price}</h2>

      </div>

    </>
  )
}

export default ProductsList