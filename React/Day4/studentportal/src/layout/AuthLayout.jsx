import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Hooks from "../pages/Hooks"

const AuthLayout = () => {
    return (
        <>

            <NavBar/>
            <Hooks />
            <Outlet/>

        </>
    )
}

export default AuthLayout