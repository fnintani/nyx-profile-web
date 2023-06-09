import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Caca from "../Assets/caca.png";
import Agung from "../Assets/agung.png";
import Talia from "../Assets/talia.png";

const Work = () => {
  const workingTalent = [
    {
      id: 1,
      image: Agung,
      title: "Agung",
      text: "Agung adalah salah satu talenta yang aktif melakukan Live Streaming dan berhasil mendapatkan banyak gift setiap bulannya.",
    },
    {
      id: 2,
      image: Caca,
      title: "Caca",
      text: "Caca yang friendly adalah salah satu talent yang sering mendapatkan peringkat Queen Of The Month",
    },
    {
      id: 3,
      image: Talia,
      title: "Talia",
      text: "Talent yang juga sudah lama bergabung dengan NYX Management ini, suka menghibur dengan tingkah dan obrolan konyol dan seru.",
    },
  ];

  const [index, setIndex] = useState(0);
  const { title, image, text } = workingTalent[index];
  const checkNumber = (number) => {
    if (number > workingTalent.length - 1) {
      return 0;
    }
    if (number < 0) {
      return workingTalent.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * workingTalent.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Talents</p>
          <h1 className="primary-heading">Let's get acquainted</h1>
          <p className="primary-text">
            Here are some of our awesome NYX Management talents!
          </p>
        </div>
      </div>
      <div className="img-container-work">
        <img src={image} alt={title} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{title}</h4>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Work;
