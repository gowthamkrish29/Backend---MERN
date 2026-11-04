import imageone from "../assets/shop/Shop_For_Running_trending-d.avif"
import imagetwo from "../assets/shop/Shop_for_Training_trending_d.avif"
import imagethree from "../assets/shop/Shop_For_Golf_trending_d.avif"
import imagefour from "../assets/shop/Basketball_trending_d.avif"


const Shop = () => {
  return (
    <>

        <div className="flex gap-15 mt-15 justify-center items-center ">
            <div>
                <img src={imageone} alt="" className="w-90"/>
                <p className="font-bold mt-2">Shop for Running</p>
            </div>

            <div>
                <img src={imagetwo} alt="" className="w-90"/>
                <p className="font-bold mt-2">Shop for Training</p>
            </div>

            <div>
                <img src={imagethree} alt="" className="w-90"/>
                <p className="font-bold mt-2">Shop for Golf</p>
            </div>

            <div>
                <img src={imagefour} alt="" className="w-90"/>
                <p className="font-bold mt-2">Shop for Basketball</p>
            </div>
        </div>
    
    </>
  )
}

export default Shop