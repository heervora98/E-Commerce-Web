import React from 'react'
import { Link } from 'react-router-dom'
import { InstagramOutlined, TwitterOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons'

const TopNav = () => {
    return (
        <>
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <ul className='nav'>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">About Us</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Privacy</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">FAQ</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Careers</Link></li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className='nav'>
                        <li className='nav-link  ms-auto'><Link to={""} className="text-decoration-none text-dark"><InstagramOutlined /></Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark"><TwitterOutlined /></Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark"><LinkedinOutlined /></Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark"><FacebookOutlined /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className='m-0'/>
        </>
    )
}

export default TopNav
