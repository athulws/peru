import React from 'react'
import '../Styles/PopularTours.css'

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
                        <div className='days-nine'>
                            <div className="NumberNine">
                                <p>9</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                        <div className='days-ten'>
                            <div className="NumberTen">
                                <p>10</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                    </div>

                    <div className="doller">
                        <div className="price">
                            <p>$</p>
                        </div>
                        <div className='day'>
                            <p>Adult - $2095 Children - $1895</p>
                        </div>
                    </div>

                    <div className='weekly'>
                        <p>Weekly trips year round</p>
                    </div>
                    <div className='visit'>
                        <button>Visit Tour</button>
                    </div>
                   
                </div>

                <div className="peruEncopassed">
                    <h2 className='place-name'>PERU <span className='color-red'>ENCOMPASSED</span></h2>

                    <div className='popular-firstDays'>
                        <div className='days-nine'>
                            <div className="NumberNine">
                                <p>21</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                        <div className='days-ten'>
                            <div className="NumberTen">
                                <p>20</p>
                            </div>
                            <div className='day'>
                                <p>Days</p>
                            </div>
                        </div>
                    </div>

                    <div className="doller">
                        <div className="price">
                            <p>$</p>
                        </div>
                        <div className='day'>
                            <p>Adult - $2095 Children - $1895</p>
                        </div>
                    </div>

                    <div className='weekly'>
                        <p>Weekly trips year round</p>
                    </div>
                    <div className='visit'>
                        <button>Visit Tour</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PopularTours
