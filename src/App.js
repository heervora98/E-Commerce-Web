import React, { Suspense, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import { Admin_Final } from './Routes'
import Home from './View/Home/Home'
import Loader from './View/Loader/Loader'
import DefaultNav from './View/Nav/Default'
import Sidebar from './View/Sidebar/Sidebar'


const App = () => {

  const [role, setRole] = useState('admin')

  const [ loader, setLoader ] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 3000);
  },[])

  return (
    <>
    {
      loader ? <Loader/> : <Suspense fallback={<Loader/>}>
      {
        role == 'user' ?
          <>
            <DefaultNav />
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </> : <Admin/>
      }
    </Suspense>
    }
      
    </>
  )
}

export default App
