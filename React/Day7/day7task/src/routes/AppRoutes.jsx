import {  Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import NewPage from "../pages/NewPage"
import Home from "../pages/home"

    const AppRoutes = () => {
    return (
        <>

            <Navbar />

            <Routes>


                
                <Route path="/" element={<Home/>}></Route>
                <Route path="/newpage/:pro" element={<NewPage/>}></Route>

            </Routes>

        </>
    )
}

export default AppRoutes