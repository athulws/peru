import React from 'react'
import '../Styles/Adventure.css'
import adventures from '../Assets/pexels-alex-azabache-3290067.jpg'
import frame from '../Assets/Frame-33-1.png'

const Adventure = () => {
    return (
        <div className="container adventure">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                    <div className="adventure-img">
                        <img src={adventures} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12">
                    <div className="adventure-content">
                        <div className='frame-img'><img src={frame} alt="" className="img-fluid" /></div>
                        <h2 className="adventure-headings">ADVENTURES TO PERU MADE MY TRIP</h2>
                        <h2 className="adventure-headings">EXTRAORDINARY, BLENDING EXPERT PLANNING</h2>
                        <h2 className="adventure-headings">AND OUTSTANDING SERVICE FOR AN</h2>
                        <h2 className="peruvian">UNFORGETTABLE PERUVIAN ADVENTURE!</h2>
                        <h4 className='ralph'>RALPH SIN</h4>
                        <p className="mb-0 winner">Award-winning Writer-Director</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Adventure
