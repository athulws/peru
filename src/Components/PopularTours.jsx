import React from 'react'
import '../Styles/PopularTours.css'
import { Link } from 'react-router-dom'

const PopularTours = () => {
    return (
        <div className='popular'>
            <div className="popular-sec">
                <div className="popular-setup">
                    <h2 className='popular-firstHeading'>OUR POPULAR</h2>
                    <h2 className='popular-secondHeading'>TOURS</h2>
                </div>
            </div>

            <div className='popularTours'>
                <div className="amazone">
                    <h2 className='place-name'>AMAZON &<span className='color-red'> ANDES</span></h2>

                    <div className='popular-firstDays'>
                        <div className='daysFirst-Wrapper'>
                            <div className="NumberFirst-section">
                                <p>9</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                        <div className='daySecond-wrapper'>
                            <div className="NumberSecond-section">
                                <p>10</p>
                            </div>
                            <div className='day'>
                                <p>Nights</p>
                            </div>
                        </div>
                    </div>

                    <div className="doller">
                        <div className="price">
                            <p>$</p>
                        </div>
                        <div className='catagory'>
                            <p>Adult - <span className='money'>$2095</span> Children - <span className='money'>$1895</span></p>
                        </div>
                    </div>

                    <div className='weekly'>
                        <p>Weekly trips year round</p>
                    </div>
                    <div className='visit'>
                        <Link to={'https://www.adventurestoperu.com/travel/amazon-andes-tour/'}><button>Visit Tour</button></Link>
                    </div>
                   
                </div>

                <div className="peruEncopassed">
                    <h2 className='place-name'>PERU <span className='color-red'>ENCOMPASSED</span></h2>

                    <div className='popular-firstDays'>
                        <div className='daysFirst-Wrapper'>
                            <div className="NumberFirst-section">
                                <p>21</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                        <div className='daySecond-wrapper'>
                            <div className="NumberSecond-section">
                                <p>20</p>
                            </div>
                            <div className='day'>
                                <p>Nights</p>
                            </div>
                        </div>
                    </div>

                    <div className="doller">
                        <div className="price">
                            <p>$</p>
                        </div>
                        <div className='catagory'>
                            <p>Adult - <span className='money'>$3750</span> Children - <span className='money'>$3350</span></p>
                        </div>
                    </div>

                    <div className='weekly'>
                        <p>Weekly trips year round</p>
                    </div>
                    <div className='visit'>
                        <Link to={'https://www.adventurestoperu.com/travel/peru-encompassed-tour/'}><button>Visit Tour</button></Link>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PopularTours
