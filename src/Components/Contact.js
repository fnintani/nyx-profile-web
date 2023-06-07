import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Are you interested?</h1>
      <h1 className="primary-heading">Contact us!</h1>
      <div className="contact-form-container">
        <button className="secondary-button wa">
          <a className="link-style" href="https://wa.me/082214239857">
            WhatsApp Chat
          </a>
        </button>
        <button className="secondary-button">
          <a className="link-style" href="https://www.instagram.com/nyx.mgmt/">
            Instagram
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
