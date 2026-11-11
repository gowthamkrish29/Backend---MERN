

const Product = () => {


    let pro = {
        id: "P101",
        name: "Galaxy S24 - Second Hand Phone",
        price: 20000,
        brand: "Samsung",
        category: "Electronics"
    };


    let discount = pro.price * 0.9;




    return (
        <>

            <div className="bg-gray-800 text-teal-50 p-4 m-10">

                <h1 className="text-4xl font-bold  my-3">Product Details</h1>

                <h2 className="my-3 font-semibold">{pro.name}</h2>

                <h2 className="my-3 font-semibold">Brand: {pro.brand}</h2>

                <h2 className="my-3 font-semibold">Category: {pro.category}</h2>

                <h2 className="my-3 font-semibold">Product ID: {pro.id}</h2>

                <h2 className="my-3 font-semibold">Discounted Price: ₹{discount}</h2>

                <h2 className="my-3 font-semibold"> Original Price: ₹{pro.price}</h2>

            </div>

        </>
    )
}

export default Product