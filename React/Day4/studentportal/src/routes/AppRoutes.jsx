import { Routes, Route, Navigate  } from "react-router-dom"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import Assignments from "../pages/Assignments"
import Profile from "../pages/Profile"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/Login"
import Hooks from "../pages/Hooks"



const AppRoutes = () => {
  return (
    <>

      <Routes>

        <Route path="/login" element={<Login/>} />  

        <Route element={<AuthLayout />}>

          <Route path="/Home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hooks" element={<Hooks />}/>

        </Route>

           <Route path="*" element={<Navigate to="/login" replace />} />


      </Routes>

    </>
  )
}

export default AppRoutes