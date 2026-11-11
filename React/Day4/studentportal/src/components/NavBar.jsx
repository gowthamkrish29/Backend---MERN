import { NavLink } from "react-router-dom"

import logoImage from "../assets/Profile/student.png"

const NavBar = () => {
  return (

    <>
    
        <div className="bg-blue-600 flex w-screen gap-20 justify-between p-5 shadow-xl items-center text-center fixed top-0">


            <div>
                <img src={logoImage} alt="" className="w-10 mx-10"/>
            </div>


            <div className=" text-black flex gap-15 mx-15 font-semibold text-xl">

                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600 p-1 text-center w-40"}to="/">Home</NavLink>
                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600 p-1 text-center w-40"}to="dashboard">Dashboard</NavLink>
                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600 p-1 text-center w-40"}to="courses">Courses</NavLink>
                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600 p-1 text-center w-40"}to="assignments">Assignments</NavLink>
                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600 p-1 text-center w-40"}to="profile">Profile</NavLink>
                <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-blue-600"} to="login">Login</NavLink>
            </div>

        </div>
    


    </>

  )
}

export default NavBar