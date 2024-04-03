import React from 'react'
import '../Styles/Awards.css'
import agencia from '../Assets/Cert-1-1.png'
import essna from '../Assets/Cert-2-1.png'
import sunat from '../Assets/Cert-3-1.png'
import adviser from '../Assets/cert-4-1.png'
import logos from '../Assets/0158628f78e6824f46bbfa351e9f71d4.png'

const Awards = () => {
    return (
        <div className='award-wrapper'>
            <div className='adventure-seUp'>
                <img src={logos} alt="" />
                <p>Adventures to Peru is an award winning, family-operated travel company that curates unforgettable journeys while keeping the planet's well-being at heart.</p>
            </div>

            <div className='award-section'>
                <div className='line-one'>

                </div>
                <div className='agencia'>
                    <img src={agencia} alt="" />
                    
                </div>
                <div className='essna'>
                    <img src={essna} alt="" />
                  
                </div>
                <div className='sunat'>
                    <img src={sunat} alt="" />
                    
                </div>
                <div className='adviser'>
                    <img src={adviser} alt="" />
                   
                </div>
                <div className='line-one'>

                </div>
            </div>

        </div>
    )
}

export default Awards
