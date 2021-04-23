import React, { useState, useEffect } from "react";
import "./carousel.css";

function Carousel(props) {
  const { children } = props;
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [clickStart, setClickStart] = useState();
  const [dragging, setDragging] = useState(false);
  const mobile = window.innerWidth > 768 ? "false" : "true";

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (index < length - 1) {
      setIndex((prevState) => prevState + 1);
    }
    // sets the index to next if you are not on the last slide
  };

  const previous = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
    }
    // sets the index to be the previous if you are further than first slide
  };

  const handleMouseDown = (e) => {
    setClickStart(e.screenX);
    console.log(e.screenX);
  };

  const handleMouseMove = (e) => {
    if (clickStart !== undefined) {
      setDragging(true);
    }
  };

  const handleMouseUp = (e) => {
    if (clickStart - e.screenX > 20 && index < children.length - props.show) {
      next();
    } else if (clickStart - e.screenX < -20) {
      previous();
    }
    setClickStart();
    setDragging(false);
    console.log(e.screenX);
  };

  return (
    <div
      className="carousel-outer-container"
      style={{
        height: props.outerHeight,
        width: props.outerWidth,
        padding: props.outerPadding,
      }}
    >
      <div
        className="carousel-inner-container"
        style={{ height: props.innerHeight, width: props.innerWidth }}
      >
        <div className="carousel-wrapper">
          {index > 0 && (
            <button className="left-arrow" onClick={previous}>
              &lt;
            </button>
          )}
          {index < children.length - props.show && (
            <button className="right-arrow" onClick={next}>
              &gt;
            </button>
          )}
          <div
            className="carousel-content-wrapper"
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseDown={(e) => handleMouseDown(e)}
            onMouseUp={(e) => handleMouseUp(e)}
          >
            {/* the sliding is done by the translateX below. it translates by (100% of the slides width * the index of the slide) from the starting position.  */}
            <div
              className="carousel-content"
              style={{
                transform: mobile === "false" && `translateX(-${index * 100}%)`,
                width: mobile === "false" && `${100 / props.show}%`,
                pointerEvents: dragging ? "none" : undefined,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
