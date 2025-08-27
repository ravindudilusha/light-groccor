import React from 'react';
import Headers from '../Component/Headers';
import Subheader from '../Component/Subheader';
import Carousel from 'react-bootstrap/Carousel';
import Categories from '../Component/Categories';
import "../styles/Header.css";
import "../styles/Home.css";

// Example images for carousel (replace with your own)
import slide1 from "../Assets/Carosouel.svg";
import slide2 from "../Assets/Carosouel.svg";
import slide3 from "../Assets/Carosouel.svg";

function Home() {
  return (
    <div>
      {/* Main Header */}
      <Headers />

      {/* Sub Header */}
      <Subheader />

      {/* Carousel Section */}
      <Carousel className="mt-3" controls indicators>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-90" src={slide1} alt="First slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-90" src={slide2} alt="Second slide" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="d-block w-90" src={slide3} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>

      <Categories/>
    </div>
  );
}

export default Home;
