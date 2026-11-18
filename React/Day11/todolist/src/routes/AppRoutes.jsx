import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Todo from '../pages/Todo'
import TodoList from "../pages/TodoList"

const AppRoutes = () => {
  return (
    <>

    <NavBar />

    <Routes>

        <Route path="/" element={<Todo />}/>
        <Route path="/practice" element={<TodoList
         />}/>

    </Routes>

    </>
  )
}

export default AppRoutes