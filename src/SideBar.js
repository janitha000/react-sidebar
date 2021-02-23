import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import './SideBar.css'

const SideBar = () => {
    const [showSideBar, setShowSidebar] = useState(false)

    const toggleNavBar = () => {
        setShowSidebar((preVal) => !preVal)
    }
    return (
        <>
            <div className="sidebar">
                <Link to="#" className="sidebar-link" onClick={toggleNavBar}>
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="sidebar-link" onClick={toggleNavBar}>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map(({ title, path, icon, cName }, index) => (
                        <li key={index} className={cName}>
                            <Link to={path}>
                                {icon}
                                <span>{title}</span>
                            </Link>

                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default SideBar
