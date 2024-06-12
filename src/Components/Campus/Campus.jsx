// import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import arrow from "../../assets/white-arrow.png";
const Campus = () => {
  return (
    <div className="campus">
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
      </div>
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
