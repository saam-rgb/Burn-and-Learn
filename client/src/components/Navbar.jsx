import React from "react";
import { GiMuscleUp } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto md:px-10 px-2 py-2">
      <nav className="flex justify-between items-center">
        {/* left section */}
        <div>
          <Link to="/">
            <GiMuscleUp className="size-10" />
          </Link>
        </div>
        {/* right section */}
        <div className="flex gap-8 items-center">
          <ul className="flex gap-8 text-primary">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blogs">Blog</a>
            </li>
          </ul>
          <button className="btn">Contact Us</button>
        </div>
      </nav>
    </header>
  );
};
