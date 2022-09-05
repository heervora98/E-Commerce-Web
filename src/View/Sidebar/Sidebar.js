import Divider from '@mui/material/Divider';
import { Admin_Route } from '../../Navigation/Nav';
import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar ps-3 '>
            <div className="row">
                <div className="sara-logo p-2 col-12">
                    <img src="/assets/images/web_black.png" alt="SARA LOGO" height={50} />
                </div>
                <div className="col-12">
                    <ul className='list-unstyled'>
                        {
                            Admin_Route.map((element, index) =>
                                <Link to={element.url} key={index} className="text-start">
                                    <li className='p-3 fs-6 text-dark'><i className={element.icon} /><span className='ms-3'>{element.name}</span></li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar