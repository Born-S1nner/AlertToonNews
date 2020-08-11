import React from 'react'
import AliceCarsel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import mom from "../../img/mom.jpg"
import wolf from "../../img/wolf.jpg"

function Series() {
    return (
        <div className="panel-hide">
            <h3>Upcoming Series</h3>
            <p>content</p>
            <AliceCarsel>
                <img src={mom} alt="" className="sliderimg" />
                <img src={wolf} alt="" className="sliderimg" />
            </AliceCarsel>
        </div>
    )
}

export default Series
