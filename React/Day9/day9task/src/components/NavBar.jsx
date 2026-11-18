import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>

    <div className="bg-black text-white text-xl font-bold flex justify-between p-6">
        <div className="mx-20">
            Tasks
        </div>

        <div className="flex gap-8 mx-8">
          
            <Link to="/">ArrayProcess</Link>
            <Link to="/obj">ObjectProcess</Link>
            <Link to="/aob" className="text-red-500">ArrayofObject</Link>
            <Link to="/boolean">Boolean</Link>
            <Link to="/null">Nullish</Link>
            <Link to="/practice" className="text-emerald-400">Practice</Link>

        </div>
    </div>

    </>


  )
}

export default NavBar