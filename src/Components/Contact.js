import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1
        className="primary-heading"
        data-aos="flip-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        Are you interested?
      </h1>
      <h1
        className="primary-heading"
        data-aos="flip-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        Contact us!
      </h1>
      <div className="contact-form-container">
        <button
          className="secondary-button wa"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <a className="link-style" href="https://wa.me/6282214239857">
            WhatsApp Chat
          </a>
        </button>
        <button
          className="secondary-button"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="0"
        >
          <a className="link-style" href="https://www.instagram.com/nyx.mgmt/">
            Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
