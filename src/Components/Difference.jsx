import React from 'react'
import '../Styles/Difference.css'

const Difference = () => {
    return (
        <div className='unique'>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="unique-one">
                            <h2 className='unique-firstTitle'>WHAT MAKES US</h2>
                            <h2 className='unique-secondTitle'>DIFFERENT?</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="unique-paragraph">
                            <p>We believe strongly in low impact or rather, positive impact tourism. Broadly speaking, this means that we try to minimize the negative aspects of tourism on the local cultures and environments that we visit and maximize the positive aspects. We hope that one of the joys of traveling with ATP will be in meeting the local people and traveling to more remote areas. Unfortunately, tourism can radically alter what it was that inspired the industry in the first place. It is for this reason that we as travelers have a responsibility to minimize their impact on the people and environments that are visited.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container tour">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                       
                            <div className='local'>
                                <h3>We are local and we love what we do!</h3>
                                <p>Being based in the region gives us an edge. We know the local mentality; we visit and re-visit all of the places you'll go and are constantly updated on local events.</p>
                            </div>
                       
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                   
                            <div className='departure'>
                                <h3>Pre-departure Attention</h3>
                                <p>Some times it's the little things that matter. At ATP we give all present or potential clients the opportunity to correspond directly by telephone or e-mail with your trip host anytime before your trip departure date. All of the places you'll go and are constantly updated on local events.</p>
                            </div>
                       
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        
                            <div className='experience'>
                                <h3>Expert knowledge and experience</h3>
                                <p>We can take you to the country's natural highlights, introduce you to his local friends, and maybe even find a local 'fiesta' or street party that few tourists will ever have the privilege to attend.</p>
                            </div>
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Difference
