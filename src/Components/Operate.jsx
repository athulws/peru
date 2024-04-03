import React from 'react'
import '../Styles/Operate.css'
import image1 from '../Assets/operateFirstImg.png'
import image2 from '../Assets/34.png'
import image3 from '../Assets/OperateSecondImg.png'
import image4 from '../Assets/equador-1.png'

const Operate = () => {
    return (
        <div className='container-fluid operate_wrapper'>
            <div className="container operate">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="operate-contents">
                            <h2 className='operate-firstHeading'>WHERE WE</h2>
                            <h2 className='operate-secondHeading'>OPERATE</h2>
                            <p>ATP is an adventure tour company that specializes in small group travel to Peru. We do not operate a large network of tours worldwide nor do we claim to be experts on every South American country. We specialize in Peru and know it well. Whether it be the Inca Trail, sunrise in Machu Picchu, the pristine Amazon basin or the recently uncovered waterfalls at Gocta in Cocachimba, it’s this seemingly limitless potential that drives us.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        {/* <div className="peru">
                            <div className='peru-name'>
                                <h3 className='peru-heading'>PERU</h3>
                            </div>
                        </div> */}
                        <div className="peru">
                                <div className="gradient-bg"></div>
                                <img src={image2} alt="" className='imge2' />
                                <div className="peru-image">
                                    <img src={image1} alt="" />
                                </div>
                                <div className='peru-name'>
                                    <h3 className='peru-heading'>PERU</h3>
                                </div>
                            </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        {/* <div className="ecuador">
                            <div className='ecuador-name'>
                                <h3>ECUADOR</h3>
                            </div>
                        </div> */}

                        <div className="peru">
                                <div className="gradient-bg"></div>
                                <img src={image4} alt="" className='imge2' />
                                <div className="peru-image">
                                    <img src={image3} alt="" />
                                </div>
                                <div className='peru-name'>
                                    <h3 className='peru-heading'>ECUADOR</h3>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Operate
