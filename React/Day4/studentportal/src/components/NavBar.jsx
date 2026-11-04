import { NavLink } from "react-router-dom"

import logoImage from "../assets/Profile/student.png"

const NavBar = () => {
  return (

    <>
    
        <div className="bg-blue-600 flex w-screen gap-20 justify-between p-5 shadow-xl items-center text-center fixed top-0">

            {/* <div className="bg-blue-800 px-4 py-3 mx-15 rounded-2xl text-xl font-semibold items-center text-center">
                STUDENT PORTAL
            </div> */}

            <div>
                <img src={logoImage} alt="" className="w-10 mx-10"/>
            </div>


            <div className=" text-white flex gap-15 mx-15 font-semibold text-xl">

                <NavLink to="/">Home</NavLink>
                <NavLink to="dashboard">Dashboard</NavLink>
                <NavLink to="courses">Courses</NavLink>
                <NavLink to="assignments">Assignments</NavLink>
                <NavLink to="profile">Profile</NavLink>
                
            </div>

        </div>
    


    </>

  )
}

export default NavBar