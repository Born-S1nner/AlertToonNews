import React from 'react';
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import goh from "../../img/goh.jpg"
import coin from "../../img/coin.jpg"
import Tower from "../../img/Tower_of_god_anime.png"

class Event extends React.Component {

    render() {
        const seconds = 3000
        return (
            <div className="panel-hide">
                <h3>Upcoming Events</h3>
                <AliceCarousel autoPlay autoPlayInterval={seconds}>
                    <img src={goh} alt="" className="sliderimg" />
                    <img src={coin} alt="" className="sliderimg" />
                    <img src={Tower} alt="" className="sliderimg" />
                </AliceCarousel>
            </div>
        )
    }
}

export default Event
