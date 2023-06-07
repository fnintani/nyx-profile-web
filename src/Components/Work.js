import React from "react";
import Caca from "../Assets/caca.png";
import Agung from "../Assets/agung.png";
import Talia from "../Assets/talia.png";

const Work = () => {
  const workingTalent = [
    {
      image: Agung,
      title: "Agung",
      text: "Agung adalah salah satu talenta yang aktif melakukan Live Streaming dan berhasil mendapatkan banyak gift setiap bulannya.",
    },
    {
      image: Caca,
      title: "Caca",
      text: "Caca yang friendly adalah salah satu talent yang sering mendapatkan peringkat Queen Of The Month",
    },
    {
      image: Talia,
      title: "Talia",
      text: "Talent yang juga sudah lama bergabung dengan NYX Management ini, suka menghibur dengan tingkah dan obrolan konyol dan seru.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Talents</p>
        <h1 className="primary-heading">Let's get acquainted</h1>
        <p className="primary-text">
          Here are some of our awesome NYX Management talents!
        </p>
      </div>
      <div className="work-section-bottom">
        {workingTalent.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img className="img-round" src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
