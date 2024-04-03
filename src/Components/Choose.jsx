import React from 'react'
import '../Styles/Choose.css'
import peruImg from '../Assets/7.lake.png'
import man from '../Assets/Image-2-1.png'

const Choose = () => {
    return (
        <div className="container choose-wrapper">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="choosing-images">
                        <img src={peruImg} alt="" className="img-fluid image-one" />
                        <img src={man} alt="" className="img-fluid image-two" />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="choose-content">
                        <h2 className='subTitle-one'>WHY CHOOSE</h2>
                        <h2 className='subTitle-two'>ATP?</h2>
                        <div className='sub-section'>
                            <p>Being based in the region gives us an edge. We know the local mentality; we visit and re-visit all of the places you’ll go and are constantly updated on local events. With ATP you’ll have a ready-made network of local friends and expert contacts. Our trips include airport arrival and departure transfers. It’s no fun arriving in a foreign country and having to make your way to your hotel on your own, being hassled and ripped off by the airport taxi drivers.</p>
                            <div className="btn-contact">
                                <button>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Choose
