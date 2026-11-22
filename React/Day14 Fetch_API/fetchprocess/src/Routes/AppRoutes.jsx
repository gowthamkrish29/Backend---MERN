import { Route, Routes } from "react-router-dom"
import FetchProcess from "../pages/FetchProcess"
import NavBar from "../components/NavBar"
import Practice from "../pages/Practice"
import UseEffectProcess from "../pages/UseEffectProcess"
import Timer from "../pages/Timer"

const AppRoutes = () => {
  return (
    <>

    <NavBar/>

    <Routes>

    <Route path="/" element={<FetchProcess/>} />
    <Route path="practice" element={<Practice/>} /> 
    <Route path="useEffPro" element={<UseEffectProcess/>} />
    <Route path="timer" element={<Timer/>} />

    </Routes>

    </>
  )
}

export default AppRoutes