import React, { useState } from 'react'

import { BiSearch } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from '../Assets/0158628f78e6824f46bbfa351e9f71d4.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

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

    // -----------------destination----------------

    const [showDestinations, setShowDestinations] = useState(false);

    const toggleDestinations = () => {
        setShowDestinations(!showDestinations);
    };

    // -----------------destination----------------

    // -----------------activities----------------

    const [showActivities, setShowActivities] = useState(false);

    const toggleActivities = () => {
        setShowActivities(!showActivities);
    };

    // -----------------activities----------------


    // ----------------------------accordian-----------------------------------------
    const [activeIndex, setActiveIndex] = useState(null);
    
    const [customActiveIndex, setCustomActiveIndex] = useState(null);

    //accordian-one
    const handleAccordionClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

    };

    //accordian-one

    //accordian-two



    const handleCustomAccordionClick = (index) => {
        setCustomActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };;

    //accordian-two

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to={'/'}><img src={logo} alt="Logo" /></Link>
            </div>
            {/* <div className='bar-btn'>
                <div className='booking-wrapper'><Link to={'https://www.adventurestoperu.com/book-a-trip/'}><button className='booking-sets'>Book Now</button></Link></div>
                <div className={`menu-icon ${showSidebar ? 'active-buttonz' : ''}`} onClick={toggleSidebar}>
                    
                    <GiHamburgerMenu id='hamBurger'/>
                </div>
            </div> */}
            <div className='bar-btn'>
                <div className='booking-wrapper'>
                    <Link to={'https://www.adventurestoperu.com/book-a-trip/'}>
                        <button className='booking-sets'>Book Now</button>
                    </Link>
                </div>
                <div className={`menu-icon ${showSidebar ? 'active-buttonz' : ''}`} onClick={toggleSidebar}>
                    {showSidebar ? (
                        <span className='closing' onClick={closeSidebar}><IoMdClose /></span>
                    ) : (
                        <GiHamburgerMenu id='hamBurger' />
                    )}
                </div>
            </div>
            <ul className='navbar-options'>
                <Link to={'https://www.adventurestoperu.com/'}><div>Home</div></Link>
                <Link to={'https://www.adventurestoperu.com/about-us/'}><div>About Us</div></Link>

                {/* <li className="dropdown">
                    <div className='destination-sec'>Destinations <span className='drop_down'><RiArrowDropDownLine /></span></div>
                    <ul className="dropdown-content">
                        <div className='first-main-places'>
                            <Link to={''}><li>Peru</li></Link>
                            <Link to={''}><li>Equador</li></Link>
                            <Link to={''}><li>Galapagos</li></Link>
                        </div>
                    </ul>
                </li> */}
                <li className="dropdown" onClick={toggleDestinations}>
                    <div className='destination-sec'>Destinations <span className='drop_down'><RiArrowDropDownLine /></span></div>
                    <ul className={`dropdown-content ${showDestinations ? 'active' : ''}`}>
                        <div className='first-main-places'>
                            <Link to={'https://www.adventurestoperu.com/peru/'}><li>Peru</li></Link>
                            <Link to={'https://www.adventurestoperu.com/ecuador/'}><li>Equador</li></Link>
                            <Link to={'https://www.adventurestoperu.com/galapagos/'}><li>Galapagos</li></Link>
                        </div>
                    </ul>
                </li>

                {/* <li className="dropdown">
                    <div className='destination-sec'>Activities <span className='drop_down'><RiArrowDropDownLine /></span></div>
                    <ul className="dropdown-content-navbar">
                        <div className='main-places'>
                            <div className='second-main-places'>
                                <Link to={''}><li>Popular Tours</li></Link>
                                <Link to={''}><li>Traditional</li></Link>
                                <Link to={''}><li>Machu Picchu</li></Link>
                                <Link to={''}><li>Nazca Lines</li></Link>
                                <Link to={''}><li>Around Lima</li></Link>
                                <Link to={''}><li>Active</li></Link>
                                <Link to={''}><li>Trekking</li></Link>
                            </div>
                            <div>
                                <Link to={''}><li>Around Lima</li></Link>
                                <Link to={''}><li>Active</li></Link>
                                <Link to={''}><li>Trekking</li></Link>
                            </div>
                        </div>
                    </ul>
                </li> */}
                <li className="dropdown" onClick={toggleActivities}>
                    <div className='destination-sec'>Activities <span className='drop_down'><RiArrowDropDownLine /></span></div>
                    <ul className={`dropdown-content-navbar ${showActivities ? 'active' : ''}`}>
                        <div className='main-places'>
                            <div className='second-main-places'>
                                <Link to={'https://www.adventurestoperu.com/popular-tours/'}><li>Popular Tours</li></Link>
                                <Link to={'https://www.adventurestoperu.com/traditional/'}><li>Traditional</li></Link>
                                <Link to={'https://www.adventurestoperu.com/machu-picchu_/'}><li>Machu Picchu</li></Link>
                                <Link to={'https://www.adventurestoperu.com/nazcalines/'}><Link to={''}><li>Nazca Lines</li></Link></Link>
                                <Link to={'https://www.adventurestoperu.com/around-lima/'}><li>Around Lima</li></Link>
                                <Link to={'https://www.adventurestoperu.com/active/'}><li>Active</li></Link>
                                <Link to={'https://www.adventurestoperu.com/trekking/'}><li>Trekking</li></Link>
                            </div>
                            <div>
                                <Link to={'https://www.adventurestoperu.com/amazon-jungle/'}><li>Amazon Jungle</li></Link>
                                <Link to={'https://www.adventurestoperu.com/puerto-maldonado-region/'}><li>Puerto Maldonado Region</li></Link>
                                <Link to={'https://www.adventurestoperu.com/iquitos/'}><li>Iquitos Region</li></Link>
                            </div>
                        </div>
                    </ul>
                </li>

                {/* <Link to={''}><div className='destination-sec'>Destinations <span className='drop_down'><RiArrowDropDownLine /></span></div></Link> */}
                {/* <Link to={''}><div className='activity-sec'>Activities <span className='drop_down'><RiArrowDropDownLine /></span></div></Link> */}
                <Link to={'https://www.adventurestoperu.com/blog-page/'}><div>Blog</div></Link>
                <Link to={''}><div>Contact</div></Link>
                <Link to={'https://www.adventurestoperu.com/book-a-trip/'}><button className='booking'>Book Now</button></Link>
                <select className='en-dropdown'>
                    <option value="option1">EN</option>
                </select>


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
                {/* <div className="close-section">
                    <div className='close-btn'>
                        <button onClick={closeSidebar}><AiOutlineCloseCircle /></button>
                    </div>
                </div> */}


                <div className="options-section">
                    <Link to={'/'}><div className='peru-bar'>Home</div></Link>
                    <Link to={''}><div className='peru-bar'>About Us</div></Link>
                    {/* <Link to={''}><div>Destinations</div></Link> */}
                    <div>
                        <div className='peru-bar'>

                            <button className={`accordion ${activeIndex === 0 ? "active" : ""}`} onClick={() => handleAccordionClick(0)}>
                                Destinations
                            </button>
                            <div className={`panel ${activeIndex === 0 ? "show" : ""}`}>
                                <Link to={'https://www.adventurestoperu.com/peru/'}><p className='panel-text'>Peru</p></Link>
                                <Link to={'https://www.adventurestoperu.com/ecuador/'}><p className='panel-text'>Ecuador</p></Link>
                                <Link to={'https://www.adventurestoperu.com/galapagos/'}><p className='panel-text'>Galapagos</p></Link>
                            </div>

                        </div>
                    </div>




                    <button className={`accordion ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleAccordionClick(1)}>
                        Activities
                    </button>
                    <div className={`panel ${activeIndex === 1 ? "show" : ""}`} id='populrPlace'>
                        <Link to={'https://www.adventurestoperu.com/popular-tours/'}><p className='panel-text'>Popular  Tours</p></Link>
                       <Link to={'https://www.adventurestoperu.com/traditional/'}><p className='panel-text'>Traditional</p></Link>
                        <Link to={'https://www.adventurestoperu.com/machu-picchu_/'}><p className='panel-text'>Machu Picchu</p></Link>
                        <Link to={'https://www.adventurestoperu.com/nazcalines/'}><p className='panel-text'>Nazca Lines</p></Link>
                        <Link to={'https://www.adventurestoperu.com/around-lima/'}><p className='panel-text'>Around Lima</p></Link>
                        <Link to={'https://www.adventurestoperu.com/active/'}><p className='panel-text'>Active</p></Link>
                        <Link to={'https://www.adventurestoperu.com/trekking/'}><p className='panel-text'>Trecking</p></Link>

                        <div>
                            <button className={`custom-accordion ${customActiveIndex === 1 ? "active" : ""}`} onClick={() => handleCustomAccordionClick(1)}>
                                <Link to={'https://www.adventurestoperu.com/amazon-jungle/'}><div className='amazone-jungle'>Amazon Jungle</div></Link>
                            </button>
                            <div className={`custom-panel ${customActiveIndex === 1 ? "show" : ""}`}>
                                <Link to={'https://www.adventurestoperu.com/puerto-maldonado-region/'}><p className='panel-text'>Puerto Maldonado Region</p></Link>
                                <Link to={'https://www.adventurestoperu.com/iquitos/'}><p className='panel-text'>Iquitos Region</p></Link>
                            </div>
                        </div>
                        
                    </div>
                    {/* <Link to={''}><div className='peru-bar'>Activities</div></Link> */}
                    <Link to={'https://www.adventurestoperu.com/blog-page/'}><div className='peru-bar'>Blog</div></Link>
                    <Link to={''}><div className='peru-bar'>Contact</div></Link>

                    <div>
                        <select className='en-dropdown-now'>
                            <option value="option1">EN</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar