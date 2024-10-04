import React from "react";
import about from "../../assets/about1.jpg";

export const About = () => {
  return (
    <div className="container">
      <div className="heading text-center mb-5">About</div>
      <div className="row">
        <div className="col-md-6">
          <p>Tell me about</p>
          <p>Elevate Wellness</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            minima odio quidem animi mollitia provident ducimus itaque sit illum
            repellendus?
          </p>
          <p>Click 'JOIN NOW' and I'll see you on WhatsApp</p>
          <a href="/" className="btn">
            Join Now
          </a>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about} alt="" className="w-75" />
        </div>
      </div>
    </div>
  );
};
