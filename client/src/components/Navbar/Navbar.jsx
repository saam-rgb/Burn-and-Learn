import React from "react";
import "./Navbar.css";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";

export const Navbar = () => {
  // const [dumbell, setDumbell] = useState();
  return (
    <div>
      <nav class="navbar navbar-expand-lg  sub-heading">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span>
              <FitnessCenterOutlinedIcon />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto text-center mb-2 mb-lg-0 sub-heading">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form
              class="d-flex justify-content-center mb-sm-0 mb-2"
              role="search">
              {/* <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              <button class="btn btn-outline-success primary-btn" type="submit">
                Join now
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
