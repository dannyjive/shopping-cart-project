import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div
      style={{
        backgroundColor: "orange",
        maxWidth: "100vw",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Container>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/CarouselImage/pokemonBannerImg1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/CarouselImage/pokemonBannerImg2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/CarouselImage/pokemonBannerImg3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/CarouselImage/pokemonBannerImg4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/imgs/CarouselImage/pokemonBannerImg5.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

export default ControlledCarousel;
