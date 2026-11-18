import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ArrayofObject from '../pages/Array0bject'
import NavBar from '../components/NavBar'

const AppRoutes = () => {
  return (
    <>

    <NavBar />

    <Routes>
      <Route path="/" element={<ArrayofObject/>} />
    </Routes>

    </>
  )
}

export default AppRoutes