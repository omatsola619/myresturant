import React, { useEffect } from "react";
import "./Home.css";
import ReactTypingEffect from "react-typing-effect";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <>
    <div className="home">
      <div className="intro">
        <div className="small">
          <ReactTypingEffect text={["EatNow or stay hungry forever !"]} speed="700ms" />
        </div>
        <h2 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          Freshness in every <br /> bit and bite
        </h2>
        <button
          data-aos="fade-up"
          className="btn btn-outline-light"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Contact Us
        </button>
      </div>
    </div>
    <div className="services">
      <h3>Our Services</h3>
      <div className="container">
        <div className="service-cards">
          <div className="item">
          <i className="fa fa-utensils"></i>
            <h4>Fast Food</h4>
          </div>
          <div className="item">
          <i className="fa fa-birthday-cake"></i>
            <h4>Desserts</h4>
          </div>
          <div className="item">
          <i className="fa fa-wine-glass-alt"></i>
            <h4>Drinks</h4>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
