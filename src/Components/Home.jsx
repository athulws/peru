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
import GoogleRecaptcha from './GoogleRecaptcha'

const Home = () => {
    return (
        <div className='homePage'>
            <div className='home-section'>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <div className='home-wrapper'>
                                <h1 className='first-title'>ENLIGHTENING</h1>
                                <h1 className='second-title'>SMALL GROUP TRAVEL</h1>
                                <p className='mb-4 home-Paragraph'>Peru's greatest expeditions, tailor made to depart anytime</p>
                                <button className='home-btn'>Explore Tours</button>
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
            {/* <GoogleRecaptcha/> */}
            <Footer/>
            <Copyright/>
            <BackToTopButton/>
            
        </div>
    )
}

export default Home
