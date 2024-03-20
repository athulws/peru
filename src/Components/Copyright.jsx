import React from 'react'
import '../Styles/Copyright.css'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Copyright = () => {
    return (
        <div className='container-fluid copyRight-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 copy-right">
                        <p>Copyright © 2024 ATP | All Rights Reserved</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-right">
                        <div className='newIcons'>
                            <div className='icons'><FaInstagram /></div>
                            <div className='icons'><FaTwitter /></div>
                            <div className='icons'><FaYoutube /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Copyright
