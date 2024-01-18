import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
//
import logo from "../assets/logo.png";
import OurPartner from "../assets/partners.jpg";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <Link to={"/"} className="navbar-brand" href="#">
            <img className="img-logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} className="nav-link" aria-current="page">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/about"} className="nav-link" aria-current="page">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link" aria-current="page">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <img className="partner-logo" src={OurPartner} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Header;
