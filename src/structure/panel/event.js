import React from 'react';
import SimpleImageSlider from "react-simple-image-slider"

class Event extends React.Component {

    render() {
        const data = [
        { url: "https://cdn.animenewsnetwork.com/thumbnails/max700x700/cms/news.3/160719/godofhighschool.png.jpg" },
        { url: "https://images.unsplash.com/photo-1581252789066-5110779bda1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" },
        { url: "https://a-z-animals.com/media/animals/images/original/western_gorilla.jpg" }
        ]
        const slidestyle = { margin: "0", padding: "0", leftPadding: "20%"}
        return (
            <div className="panel-hide">
                <h3>Upcoming Events</h3>
                <SimpleImageSlider 
                    style={slidestyle}
                    width={400}
                    height={600}
                    images={data}
                />
            </div>
        )
    }
}

export default Event
