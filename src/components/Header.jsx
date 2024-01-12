import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
//
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <Link to={"/"} class="navbar-brand" href="#">
            <img className="img-logo" src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  Galllery
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} class="nav-link " aria-current="page" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
