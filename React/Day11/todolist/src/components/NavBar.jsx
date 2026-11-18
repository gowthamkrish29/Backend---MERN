import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <>

    <div className="flex bg-red-500 justify-between p-3 text-2xl font-bold ">
        <div>
            LOGO
        </div>

        <div className="flex gap-20">
            <Link to="/">Todo</Link>
            <Link to="/practice">Practice</Link>
        </div>
    </div>

        </>


    )
}

export default NavBar