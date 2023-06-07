import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className="img-bg-home" src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">NYX MANAGEMENT</h1>
        <p className="primary-text">
          NYX MANAGEMENT adalah sebuah talent agency yang bergerak dalam
          perekrutan talenta di bidang Live Streaming dan Content Creation sejak
          2021. NYX Management telah menjadi partner resmi dalam berbagai
          platform media sosial. Salah satunya adalah MICO LIVE APP.
        </p>
        <p className="primary-text">
          Gabung bersama NYX Management dan dapatkan berbagai manfaat! Syarat
          pendaftaran mudah dan akan dibimbing sampai bisa.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            <a className="link-style" href="https://wa.me/6282214239857">
              Join us!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
