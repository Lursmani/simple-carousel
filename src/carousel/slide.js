import React from "react"
import "./carousel.css"




function Slide(props) {



    return (
        <div className="carousel-slide"
        style={{
            width: props.slideWidth,
            height: props.slideHeight,
            padding: props.slidePadding

        }}
        >
            <div className="carousel-slide-inner"
            style={{
                height: props.slideInnerHeight,
                width: props.slideInnerWidth,
                display: props.slideDisplay,
            }}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Slide