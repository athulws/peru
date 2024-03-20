import React from 'react'
import Navbar from './Navbar'
import '../Styles/Home.css'
import Choose from './Choose'
import Operate from './Operate'
import Awards from './Awards'
import Difference from './Difference'
import PopularTours from './PopularTours'
import Adventure from './Adventure'
import Interest from './Interest'
import BackToTopButton from './BackToTopButton'
import Footer from './Footer'
import Copyright from './Copyright'

const Home = () => {
    return (
        <div>
            <div className='home-section'>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className='home-wrapper'>
                                <h1 className='first-title'>WE ARE</h1>
                                <h1 className='second-title'>THE ATP PEOPLE</h1>
                                <p className='mb-4 home-Paragraph'>ATP is an adventure company that specializes in small group travel to Peru</p>
                                <button className='home-btn'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Choose/>
            <Operate/>
            <Awards/>
            <Difference/>
            <PopularTours/>
            <Adventure/>
            <Interest/>
            <Footer/>
            <Copyright/>
            <BackToTopButton/>
            
        </div>
    )
}

export default Home
