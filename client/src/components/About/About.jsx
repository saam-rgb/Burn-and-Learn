import React from "react";
import about from "../../assets/about1.jpg";
import "./About.css";

export const About = () => {
  return (
    <div className="primary py-5">
      <div className="container">
        <div className="heading text-center mb-5 tc-2">About</div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6  mb-md-0 mb-4 container-fluid-md container">
            <h2 className="sub-heading tc-3">
              About <span className="sub-heading tc-2">Elevate Wellness</span>
            </h2>

            <p className="para-text tc-3">
              I’ll personally take care of you in the Elite Inner Circle! You
              won’t need any tricks or hacks. You need a personalized program
              that’s easy to follow and designed specifically for your goals. If
              you’re willing to follow what I customize, I won’t let you fail!
            </p>
            <p className="para-text tc-3">
              Click <span className="tc-2"> 'JOIN NOW'</span> and I'll see you
              on WhatsApp
            </p>
            <a href="/" className="btn secondary">
              Join Now
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={about} alt="" className="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
};
