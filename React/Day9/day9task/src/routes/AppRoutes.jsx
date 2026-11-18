import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import ArrayProcess from "../pages/ArrayProcess"
import ObjectProcess from "../pages/ObjectProcess"
import Boolean from "../pages/Boolean"
import NullishProcess from "../pages/NullishProcess"
import Practice from "../pages/Practice"
import ArrayofObject from "../pages/ArrayofObject"



const AppRoutes = () => {
  return (


    <>

      <NavBar />

      <Routes>

        <Route path="/" element={<ArrayProcess />} />
        <Route path="/obj" element={<ObjectProcess />} />
        <Route path="/aob" element={<ArrayofObject />} />
        <Route path="boolean" element={<Boolean />} />
        <Route path="null" element={<NullishProcess />} />
        <Route path="practice" element={<Practice />} />

      </Routes>

    </>
  )
}

export default AppRoutes