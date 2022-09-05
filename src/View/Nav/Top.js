import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
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
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">About Us</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Privacy</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">FAQ</Link></li>
                        <li className='nav-link'><Link to={""} className="text-decoration-none text-dark">Careers</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopNav
