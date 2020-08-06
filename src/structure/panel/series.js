import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"

function Series() {
    const data = {

    } 
    return (
        <div className="panel-hide">
            <h3>Upcoming Series</h3>
            <p>content</p>
            <SimpleImageSlider
                width={400}
                height={600}
                images={data}
            />
        </div>
    )
}

export default Series
