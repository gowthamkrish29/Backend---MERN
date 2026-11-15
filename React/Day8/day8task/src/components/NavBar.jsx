import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>

    <div className="bg-blue-600 text-white p-6 text-2xl font-bold flex justify-between">

      <div>
        UseState process
      </div>

      <div className="flex gap-20 px-10"> 

        <Link to="/" className="text-black">Array</Link>
        <Link to="/obj"  className="text-black">Object</Link>
        <Link to="/practice">Practice</Link>
      </div>

    </div>


    </>

  )
}

export default NavBar