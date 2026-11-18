import { useLocation, useNavigate, useParams } from "react-router-dom";


const NewPage = () => {


    const products = [
        { proName: "Bottle", price: 200 },
        { proName: "Bag", price: 2600 },
        { proName: "Shirt", price: 1199 },
        { proName: "Shoe", price: 999 },
        { proName: "T-shirt", price: 599 }
    ];


    const location = useLocation()

    console.log(location);


    const navigate = useNavigate();

    const { pro } = useParams();


    let singleProduct = products.find((e,i)=>i==id)


    return (
        <>

        <div>

            <h2>Product : {singleProduct.proName}</h2>
            <h2>Price : {singleProduct.price}</h2>

        </div>


        </>

    )
}

export default NewPage