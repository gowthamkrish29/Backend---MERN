import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>

      <div className="flex gap-10 bg-black text-white  justify-between p-5 text-2xl font-bold ">
        <div className="mx-20">
          SHOP - NOW
        </div>

        <div className="flex gap-10 mx-20">
          <Link to="/">Products</Link>
          {/* <Link to="/list">Products List</Link> */}
        </div>
      </div>

    </>
  )
}

export default NavBar