import React from 'react'
import '../Styles/Interest.css'

const Interest = () => {
    return (
        <div className='interest-wrapper'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 mx-auto">
                        <div className="interest-place">
                            <div><h2 className="found">FOUND SOMETHING</h2></div>
                            <h2 className="intersting">INTERESTING?</h2>
                            <p className="objective">Our main objective is to establish grass roots tourism initiatives in Peru that reach world-wide audiences with personalized service. We seek to facilitate the kind of cultural exchange that is beneficial both to the traveler and the people we commonly call locals, living in our destinations.</p>
                            <button className='contacting'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                        <div className="inbox text-center">
                            <h2 className='inbox-title'>GET INSPIRATION IN YOUR INBOX</h2>
                            <div className="first-lastNames">
                                <input type="text" className="form-control mb-3 transparent-input" placeholder='First Name' style={{ '--placeholder-color': 'white' }} />
                                <input type="text" className="form-control mb-3 transparent-input" placeholder='Last Name' style={{ '--placeholder-color': 'white' }} />
                            </div>


                            <div className="first-lastNames">
                                <input type="email" className="form-control mb-3 transparent-input" placeholder='Email' style={{ '--placeholder-color': 'white' }}/>
                                <div className='recieve'>
                                    <input type="radio" />
                                    <p>I'll be happy to receive mails from ATP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Interest
