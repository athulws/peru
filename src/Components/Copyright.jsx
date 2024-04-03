import React from 'react'
import '../Styles/Copyright.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Copyright = () => {
    return (
        <div className='container-fluid copyRight-wrapper'>
            <div className="container">
                <div className="row copy">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className='copy-right'><p>Copyright © 2024 ATP | All Rights Reserved</p></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mainIconsSet">
                        <div className='newIcons'>
                            <div className='icons'><span className='social'><FaInstagram /></span></div>
                            <div className='icons'><span className='social'><FaTwitter /></span></div>
                            <div className='icons'><span className='social'><FaYoutube /></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Copyright
