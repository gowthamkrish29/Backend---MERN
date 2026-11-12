import { Link } from "react-router-dom"


const Navbar = () => {



  return (
    <>

      <div className="bg-black p-3 flex text-white text-2xl font-bold justify-between">

        <div className="mx-20">
          Shop
        </div>

        <div className="mx-20">
          <Link to="/">Home</Link>
        </div>
      </div>


    </>
  )
}

export default Navbar