import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ username: "", useremail: "", userpassword: "" })


  const handleChange = (e) => {

    setUserData((p) => ({ ...p, [e.target.name]: e.target.value }))

  }


  const handleSubmit = (e) => {

    e.preventDefault()


    if (!userData.username || !userData.useremail || !userData.userpassword) {
      alert("Please fill the form")
      return
    }

    const obj = {
    id: Date.now(),
    username: userData.username,
    useremail: userData.useremail,
    userpassword: userData.userpassword
  };

  let getDatas = JSON.parse(localStorage.getItem("userDetails")) || []

  const checkEmail = getDatas.find((e) => e.useremail === userData.useremail)

  

  getDatas.push(obj)

  localStorage.setItem("userDetails", JSON.stringify(getDatas))


  if (checkEmail) {
    alert("Email is already in use. Try with another Email")
    return
  }


  alert("Successfully Registered")

  setUserData({ username: "", useremail: "", userpassword: "" })

  navigate("/")

  }



  return (
    <>

      <div className='flex justify-center  mt-10'>

        <div className='flex justify-center flex-col items-center m-10 shadow-xl shadow-black border-2 w-70 h-80'>

          <div className='text-2xl  text-red-500 font-bold'>
            Register
          </div>

          <form className='flex flex-col  items-center m-5 relative mb-5'
            onSubmit={handleSubmit}>

            <input type="text" placeholder='Enter Your Name'
              onChange={handleChange}
              value={userData.username}
              name='username'
              className='border-2 mb-5' />

            <input type="email" placeholder='Enter Your Email'
              onChange={handleChange}
              value={userData.useremail}
              name='useremail'
              className='border-2 mb-5' />


            <input type="password" placeholder='Enter Your Password'
              onChange={handleChange}
              value={userData.userpassword}
              name='userpassword'
              className='border-2' />

            <input type="submit" value={"Register"}
              className='bg-black text-white w-23 font-bold rounded-xl py-1 mt-5' />

          </form>

          <div className=''>
            <p className='font-bold'>Already Registered?  <span className='text-blue-600 font-bold'><Link to="/">Login</Link></span> </p>
          </div>

        </div>
      </div>


    </>
  )
}

export default Register