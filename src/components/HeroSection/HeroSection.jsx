import React from 'react'
import "./HeroSection.css"
import { Link } from 'react-router-dom'

function HeroSection() {
    return (<>
        <div className='hero__lgScreen'>
        <div className="heroSection__parent">
            <div className="heroSection__child__leftSide">
                <Link to="/men/clothes"><img src="/images/hero1.jpg" alt="clothes" /></Link>
            </div>
            <div className="heroSection__child__rightSide">
                <div className="rightSide__firstChild">
                    <Link to="/men/sneaker"><img src="/images/hero11.jpg" alt="shoes" /></Link>
                </div>
                <div className="rightSide__secondChild">
                    <Link to="/men/watches"><img src="/images/ass.jpg" alt="watches" /></Link>
                </div>
            </div>
        </div>
        </div>


    </>
        
    )
}

export default HeroSection