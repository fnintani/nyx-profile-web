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
          <h1 className="primary-heading">
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
        <div className="home-image-section">
          <img className="img-bg-home" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
