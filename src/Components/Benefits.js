import React from "react";
import Komal from "../Assets/komal.jpg";
import Gift from "../Assets/gift.jpg";

const Benefit = () => {
  return (
    <div className="benefit-section-wrapper">
      <div className="benefit-section-top">
        <p className="primary-subheading">Benefit</p>
        <h1 className="primary-heading">What Are The Benefits?</h1>
        <p className="primary-text">
          Selain mendapatkan fasilitas untuk menyalurkan bakat dan minat,
          bergabung bersama NYX Management juga bisa menambah relasi dan
          pendapatan yang berlimpah loh!
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <div className="img-container">
          <img className="pic" src={Komal} alt="" />
          <img className="pic" src={Gift} alt="" />
        </div>
        <p>
          Yuk kenalan dengan banyak orang dan dapatkan gift diamond yang dapat
          ditukarkan menjadi cuan loh!
        </p>
      </div>
    </div>
  );
};

export default Benefit;
