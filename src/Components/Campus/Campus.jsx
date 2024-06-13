// import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import gallery_5 from "../../assets/gallery-5.jpg";
import gallery_6 from "../../assets/gallery-6.jpg";
import gallery_7 from "../../assets/gallery-7.jpg";
import gallery_8 from "../../assets/gallery-8.jpg";
import gallery_9 from "../../assets/gallery-9.jpg";
import gallery_10 from "../../assets/gallery-10.jpg";
import gallery_11 from "../../assets/gallery-11.jpg";
import arrow from "../../assets/white-arrow.png";
import Marquee from "react-fast-marquee";
const Campus = () => {
  return (
    <div className="campus">
      <Marquee
        className="campus-marquee"
        speed={75}>
        <div className="gallery">
          <img
            src={gallery_1}
            alt="galery1"
          />
          <img
            src={gallery_2}
            alt="galery2"
          />
          <img
            src={gallery_3}
            alt="galery3"
          />
          <img
            src={gallery_4}
            alt="galery4"
          />
          <img
            src={gallery_5}
            alt="galery4"
          />
          <img
            src={gallery_6}
            alt="galery4"
          />
          <img
            src={gallery_7}
            alt="galery4"
          />
          <img
            src={gallery_8}
            alt="galery4"
          />
          <img
            src={gallery_9}
            alt="galery4"
          />
          <img
            src={gallery_10}
            alt="galery4"
          />
          <img
            src={gallery_11}
            alt="galery4"
          />
        </div>
      </Marquee>
      <button className="btn dark-btn">
        See more here
        <img
          src={arrow}
          alt="arrow"
        />
      </button>
    </div>
  );
};

export default Campus;
