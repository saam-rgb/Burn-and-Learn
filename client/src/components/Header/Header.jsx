import React from "react";
import header from "../../assets/header1.jpg";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <div className="header-wrap">
        <Navbar />
        <div className="header-image position-relative mb-5 ">
          <div className="overlay"></div> {/* Overlay div */}
          <img className=" " src={header} alt="" />
          <div className="d-flex justify-content-center">
            <div className="header-content position-absolute container d-flex flex-column flex-wrap  justify-content-center align-items-center ">
              <h1 className="sub-heading text-center">
                Out of the Box Digital Transformations for Health and Wellbeing
              </h1>
              <h5 className="para-text mb-3 text-center">
                Experience your wellness with 6 million+ individuals worldwide.
                Join the fitness tribe and feel the fitness vibe
              </h5>
              <a href="/" className="btn">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
