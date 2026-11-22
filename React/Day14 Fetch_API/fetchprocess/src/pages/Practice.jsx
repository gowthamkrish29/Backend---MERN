import { useEffect, useState } from "react"

const Practice = () => {

    const [product, setProduct] = useState([])

    const fetchData = async () => {

        try {

            const res = await fetch("https://dummyjson.com/carts?limit=10")

            const result = await res.json()

            console.log(result);


            setProduct(result.carts)

            console.log(setProduct);


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
                {product.map((e) => (
                    <div key={e.id}>

                        <h1>Cart ID : {e.id}</h1>

                        {e.product?.map((item) => (

                            <div key={item.id}>

                                <img src={item.thumbnail} alt={item.title} />

                                <h2>PRODUCTS: {item.products}</h2>
                                <h3>PRICE: ${item.price}</h3>
                                <h3>QUANTITY: {item.quantity}</h3>

                            </div>

                        ))}

                    </div>
                ))}
            </div>


        </>
    )
}

export default Practice