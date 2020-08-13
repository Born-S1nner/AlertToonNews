import React from 'react'
import AliceCarsel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import mom from "../../img/mom.jpg"
import wolf from "../../img/wolf.jpg"
import goh from "../../img/goh.jpg"
import Tower from "../../img/Tower_of_god_anime.png"

function Series() {
    return (
        <div className="panel-hide">
            <h3>Upcoming Series</h3>
            <p>Look into these stories below this message.</p>
            <AliceCarsel>
                <img src={mom} alt="" className="sliderimg" />
                <img src={wolf} alt="" className="sliderimg" />
                <img src={goh} alt="" className="sliderimg" />
                <img src={Tower} alt="" className="sliderimg" />
            </AliceCarsel>
        </div>
    )
}

export default Series
