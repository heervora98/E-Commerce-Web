import React, { Suspense, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin_Final } from './Routes'
import Home from './View/Home/Home'
import DefaultNav from './View/Nav/Default'
import Sidebar from './View/Sidebar/Sidebar'


const App = () => {

  const [role, setRole] = useState('admin')

  return (
    <>
      <Suspense fallback={<div>
        Loading....
      </div>}>
        {
          role == 'user' ?
            <>
              <DefaultNav />
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </> :
            <>
              <Sidebar />
              <Routes>
                {
                  Admin_Final.map((element, index) =>
                    <Route path={element.path} key={index} element={<element.component />} />
                  )
                }
              </Routes>
            </>
        }
      </Suspense>
    </>
  )
}

export default App
