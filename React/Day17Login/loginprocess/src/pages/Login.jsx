import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ username: "", useremail: "", userpassword: "" })


  const handleChange = (e) => {

    setUserData((p) => ({ ...p, [e.target.name]: e.target.value }))

  }


  const handleSubmit = (e) => {

    e.preventDefault()


    if (!userData.useremail || !userData.userpassword) {
      alert("Please fill the form")
      return
    }

    let getDatas = JSON.parse(localStorage.getItem("userDetails")) || []

    const checkEmail = getDatas.find((e) => e.useremail == userData.useremail && e.userpassword == userData.userpassword)

    if (!checkEmail) {
      alert("Invalid Credentails")
    }

    localStorage.setItem("USERDATAS", JSON.stringify(checkEmail))

    alert("Valid")

    setUserData({ useremail: "", userpassword: "" })

    navigate("/dashboard")

  }


  return (
    <>

      <div className='flex justify-center mt-10'>

        <div className='flex justify-center flex-col items-center m-10 shadow-xl shadow-black border-2 w-70 h-80'>

          <div className='text-2xl relative mb-1  text-red-500 font-bold'>
            Login
          </div>

          <form className='flex flex-col m-5 relative mb-10'
            onSubmit={handleSubmit}>


            <input type="email" placeholder="Enter Your Email"
              onChange={handleChange}
              value={userData.useremail}
              name='useremail'
              className='border-2 mb-5' />


            <input type="password" placeholder='Enter Your Password'
              onChange={handleChange}
              value={userData.userpassword}
              name='userpassword'
              className='border-2' />

              <div className='flex justify-center'>
                <input type="submit" value={"Login"}
              className='bg-black text-white w-25 font-bold rounded-xl py-1 mt-5' />
              </div>



          </form>

          <div className='m-1 text-center'>
            <p className='font-bold'>Have no Account? Register Here  <span className='text-blue-600 font-bold'><Link to="/register">Register</Link></span> </p>
          </div>

        </div>
      </div>


    </>
  )
}

export default Login