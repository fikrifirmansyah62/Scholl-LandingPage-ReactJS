// import React from 'react'
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_2 from "../../assets/user-2.png";
import user_1 from "../../assets/user-1.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    // console.log("slideForward");
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    // console.log("slideBackward");
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_1}
                  alt="users"
                />
                <div>
                  <h3>Marry jassie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue mu degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academy excellen have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_2}
                  alt="users"
                />
                <div>
                  <h3>John Doe</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue mu degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academy excellen have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_3}
                  alt="users"
                />
                <div>
                  <h3>Jessica Marlin</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue mu degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academy excellen have truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_4}
                  alt="users"
                />
                <div>
                  <h3>Jennie</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue mu degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academy excellen have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
