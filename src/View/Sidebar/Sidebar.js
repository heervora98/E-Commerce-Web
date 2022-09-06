import React, { useEffect, useState } from 'react';
import "./_sidebar.scss";
import { MdGpsNotFixed, MdOutlineTrackChanges } from "react-icons/md"
import { BiChevronRight } from "react-icons/bi"
import { AiFillCaretDown } from "react-icons/ai"
import { FaRegLightbulb } from "react-icons/fa"
import { FcInTransit } from "react-icons/fc"
import { Admin_Route } from '../../Navigation/Nav';


const Sidebar = ({ toggle, settoggle }) => {

    const handleToggle = () => {
        settoggle(!toggle)
    }

    function toggleOnScreenResize() {
        if (window.screen.width <= 768) {
            settoggle(!toggle)
        } else {
            settoggle(toggle)
        }
    }
    useEffect(() => {
        toggleOnScreenResize();
        window.addEventListener('resize', () => {
            toggleOnScreenResize();
        })

        return () => {
            window.removeEventListener('resize', () => { })
        }
    }, [])

    return (
        <nav className={`s_sidebar ${toggle ? `s_close` : ''}`}>
            <header className='overflow-hidden'>
                <div className="s_image-text">
                    <div className="s_logo-text">
                        <span className="s_name">AI Optimizer</span>
                    </div>
                </div>
                <BiChevronRight className='s_toggle' onClick={handleToggle} />

                <div className='s_project_name-wrapper'>
                    <FcInTransit className='s_icon' />
                    <span className="s_text project_name">Pixis AI</span>
                </div>
            </header>

            <div className="s_menu-bar">
                <div className="s_menu">
                    <ul className="s_menu-links">
                        {
                            Admin_Route.map((element, index) => 
                            <li className="s_nav-link">
                            <a href="#">
                                <span className='s_icon'><i className={element.icon}></i></span>
                                <span className="s_text nav-text">{element.name}</span>
                                <AiFillCaretDown className='s_icon-right' />
                            </a>
                        </li>
                            )
                        }
                        {/* <li className="s_nav-link">
                            <a href="#">
                                <MdGpsNotFixed className='s_icon' />
                                <span className="s_text nav-text">Governance AI</span>
                                <AiFillCaretDown className='s_icon-right' />
                            </a>
                        </li>
                        <li className="s_nav-link">
                            <a href="#">
                                <MdOutlineTrackChanges className='s_icon' />
                                <span className="s_text nav-text">Targeting AI</span>
                                <AiFillCaretDown className='s_icon-right' />
                            </a>
                        </li>
                        <li className="s_nav-link">
                            <a href="#">
                                <FaRegLightbulb className='s_icon' />
                                <span className="s_text nav-text">Creative AI</span>
                                <AiFillCaretDown className='s_icon-right' />
                            </a>
                        </li> */}

                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar