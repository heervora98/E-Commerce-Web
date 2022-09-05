import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './View/Home/Home'
import DefaultNav from './View/Nav/Default'


const App = () => {
  return (
    <>
    <DefaultNav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
