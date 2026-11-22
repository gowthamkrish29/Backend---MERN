import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>

    <div className="bg-black text-white font-bold p-6 flex justify-between">
        <div className="mx-3">LOGO</div>

        <div>
            <Link className="mx-3" to="/">FetchProcess </Link>
            <Link className="mx-3" to="/practice">Practice </Link>
            <Link className="mx-3" to="/useEffPro">UseEffectProcess </Link>
            <Link className="mx-3" to="/timer">Timer </Link>
        </div>
    </div>

    </>
  )
}

export default NavBar