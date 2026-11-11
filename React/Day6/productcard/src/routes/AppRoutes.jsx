import { Route, Routes } from "react-router-dom"
import Products from "../pages/Products"
import ProductsList from "../pages/ProductsList"
import NavBar from "../components/NavBar"

const AppRoutes = () => {
  return (
    <>

    <NavBar/>
    
    <Routes>

        <Route path="/" element={<Products/>}></Route>
        <Route path="/productlist/:productid" element={<ProductsList/>}></Route>

    </Routes>


    </>
  )
}

export default AppRoutes