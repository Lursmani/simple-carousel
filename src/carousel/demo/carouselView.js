import React, { useState } from "react";
import "../carousel.css";
import "./view.css";
import CarouselWrapper from "../carousel";

function Slide1() {
  const [count, setCount] = useState(0);

  return (
    <div id="cardem-slide1">
      <div id="slide1-content">
        <h1 className="cardem-slide1-text">This is my React Carousel</h1>
        <h3 className="cardem-slide1-text">
          This carousel can accept any content.
        </h3>
        <h3 className="cardem-slide1-text">
          For example, this simple counter component:
        </h3>
        <div id="cardem-counterdiv">
          <p id="cardem-counternum">Count = {count}</p>
          <button
            className="cardem-button"
            id="cardem-buttonP"
            onClick={() => setCount(count + 1)}
          >
            Add 1
          </button>
          <button
            className="cardem-button"
            id="cardem-buttonM"
            onClick={() => setCount(count - 1)}
          >
            Subtract 1
          </button>
          <button
            className="cardem-button"
            id="cardem-buttonR"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function CarouselView() {
  return (
    <CarouselWrapper
      outerHeight="100%"
      outerWidth="100%"
      innerHeight="100%"
      show={2}
    >
      <Slide1 />

      <div id="cardem-slide2">
        <div id="cardem-slide2-textdiv">
          <p id="cardem-slide2-text">It can also accept images.</p>
        </div>
      </div>

      <div id="cardem-slide3">
        <p className="cardem-slide3-text">Or anything else you can imagine.</p>
        <p className="cardem-slide3-text">
          It is customizable, responsive, easy to use, and fast.
        </p>
        <p className="cardem-slide3-text">
          So, if you like it and want to use it yourself, you can find it on my
          github{" "}
          <a id="cardem-slide3-link" href="https://github.com/Lursmani/simple-carousel">repo</a>.
        </p>
        <p className="cardem-slide3-text">
          Or, go to the next slide and watch a very cute video.
        </p>
      </div>

      <div id="cardem-slide4">
        <iframe
          id="cardem-video"
          height="100%"
          src="https://www.youtube.com/embed/7yLxxyzGiko"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </CarouselWrapper>
  );
}

export default CarouselView;
