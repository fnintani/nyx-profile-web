import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1
            className="primary-heading"
            data-aos="zoom-out-down"
            // data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
            data-aos-delay="0"
          >
            Your Best Social Media Talent Management
          </h1>
          <p className="primary-text">
            Menjadi bintang bukanlah hal mustahil! Tunjukkan bakatmu dan
            kreativitasmu sebagai konten kreator dan talent live streaming
            bersama NYX Management!
          </p>
          <button className="secondary-button">
            <a
              className="link-style"
              href="https://journal.socialights.id/live-streaming-adalah/"
            >
              What's Live Streaming?
            </a>
          </button>
        </div>
        <div
          className="home-image-section"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-delay="0"
        >
          <img className="img-bg-home" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
