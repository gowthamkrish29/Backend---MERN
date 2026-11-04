import cardone from "../assets/cards/shop-men-category-mobile.avif"
import cardtwo from "../assets/cards/shop-women-category-mobile.avif"
import cardthree from "../assets/cards/bestsellers-category-mobile.avif"
import cardfour from "../assets/cards/shop-shoes-category-mobile.avif"

import card from "../assets/cards/Desktop_Banner_.UA_Vanish.avif"
import Shop from "./Shop"

const Cards = () => {
    return (

        <>

            <div>

                <div>
                    <h1 className="text-6xl font-semibold text-gray-900 text-center mb-8 mt-20">Put Our Newest Gear To Work</h1>
                </div>

                <div className="flex gap-15 mt-15 justify-center items-center ">
                    <div>
                        <img src={cardone} alt="Shop Men" className="w-80" />
                        <p className="font-bold mt-2">Shop Men</p>
                    </div>


                    <div>
                        <img src={cardtwo} alt="Shop Women" className="w-80" />
                        <p className="font-bold mt-2">Shop Women</p>
                    </div>


                    <div>
                        <img src={cardthree} alt="Best Seller" className="w-80" />
                        <p className="font-bold mt-2">Best Seller</p>
                    </div>


                    <div>

                        <img src={cardfour} alt="Shop Shoes" className="w-80" />
                        <p className="font-bold mt-2">Shop Shoes</p>
                    </div>

                </div>


            </div>

            <div className="">

                <img src={card} alt="" className="w-screen mt-20" />

                <div>

                    <h1 className="font-semibold text-7xl text-black text-center mt-10">UA VANISH</h1>

                    <p className="text-2xl text-center mt-5 text-gray-700">Incredibly lightweight and breathable, perfect for high-intensity training.</p>


                </div>

                <div className="flex gap-10 justify-center items-center mt-3">

                    <button className="bg-black text-2xl mt-5 px-7 py-3 text-white rounded-xl justify-center text-center">Shop Men</button>

                    <button className="bg-black text-2xl mt-5 px-7 py-3 text-white rounded-xl justify-center text-center">Shop Women</button>

                </div>

            </div>

            <Shop />

        </>

    )
}

export default Cards