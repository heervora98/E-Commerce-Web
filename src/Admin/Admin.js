import React, { Suspense } from 'react'
import Sidebar from '../View/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Admin_Final } from '../Routes'
import AdminNav from '../AdminView/AdminNav'

const Admin = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                        <AdminNav/>
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
        </>
    )
}

export default Admin