import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>

    <div className="bg-amber-500 flex justify-between p-3 text-2xl font-bold ">
      <div className="mx-20">
        Logo
      </div>

      <div className="mx-20">
        <Link to="/">Array Of Object</Link>
      </div>
    </div>

    </>
  )
}

export default NavBar