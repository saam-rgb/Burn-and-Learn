import React from "react";
import headerImg from "../../assets/header.jpg";

export const Header = () => {
  return (
    <div className="">
      <img
        src={headerImg}
        alt=""
        className="relative w-full object-cover h-[calc(100vh-50px)] "
      />
      <div className="absolute translate-x-2/3 right-1/2 translate-y-1/3 top-1/4 text-white">
        <h1 className="text-6xl font-semibold mb-10">
          Start your fitness Journey
        </h1>
        <p className="mb-6">To start you fitness jouney click here</p>
        <button className="btn ">Join Now</button>
      </div>
    </div>
  );
};
