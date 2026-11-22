import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inputform from '../pages/Inputform'
import Practice from '../pages/Practice'
import StateProcess from '../pages/StateProcess'

const AppRoutes = () => {
  return (
    <>

    <Routes>

        <Route path="/" element={<Inputform/>}/>
        <Route path="/practice" element={<Practice/>}/>
        <Route path="/state" element={<StateProcess/>}/>

    </Routes>

    </>
  )
}

export default AppRoutes