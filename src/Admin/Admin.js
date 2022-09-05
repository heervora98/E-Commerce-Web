import React, { Suspense } from 'react'
import Sidebar from '../View/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Admin_Final } from '../Routes'
import AdminNav from '../AdminView/AdminNav'

const Admin = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-2 border-end p-0 d-none d-md-block">
                    <Sidebar/>
                </div>
                <div className="col-md-10 p-0">
                    <div className="row">
                        <div className="col-12">
                            <AdminNav />
                        </div>
                    </div>
                    <Suspense fallback={<div><h4>Loading</h4></div>}>
                        <Routes>
                            {
                                Admin_Final.map((element, index) =>
                                    <Route path={element.path} key={index} element={<element.component />} />
                                )
                            }
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Admin