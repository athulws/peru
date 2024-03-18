import React, { useState } from 'react'

import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from '../Assets/0158628f78e6824f46bbfa351e9f71d4.png'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showHowItWorksOptions, setShowHowItWorksOptions] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };

    const toggleHowItWorksOptions = () => {
        setShowHowItWorksOptions(!showHowItWorksOptions);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`menu-icon ${showSidebar ? 'active' : ''}`} onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className='navbar-options'>
                <Link to={'/'}><div>Home</div></Link>
                <Link to={''}><div>About Us</div></Link>
                <Link to={''}><div>Destinations</div></Link>
                <Link to={''}><div>Activities</div></Link>
                <Link to={''}><div>Blog</div></Link>
                <Link to={''}><div>Contact</div></Link>
                <button>Book Now</button>

                {/* <li className="dropdown">
                    How it works
                    <ul className="dropdown-content">
                        <Link to={'/linux-client-configuration/'}><li>Linux Client Configuration</li></Link>
                        <Link to={'/windows-client-setup-configuration/'}><li>Windows Client Configuration</li></Link>
                        <Link to={'/macos-client-configurations/'}><li>MacOS Client Configuration</li></Link>
                    </ul>
                </li> */}

            </ul>

            <div className={`sidebar ${showSidebar ? 'active' : ''}`}>
                <div className="close-section">
                    <div className='close-btn'>
                        <button onClick={closeSidebar}><AiOutlineCloseCircle /></button>
                    </div>
                </div>

                <div className="options-section">
                    <Link to={'/'}><div>Home</div></Link>
                    <Link to={''}><div>About Us</div></Link>
                    <Link to={''}><div>Destinations</div></Link>
                    <Link to={''}><div>Activities</div></Link>
                    <Link to={''}><div>Blog</div></Link>
                    <Link to={''}><div>Contact</div></Link>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar