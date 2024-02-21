import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./staylNavbar.css";

// import  Link  from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark p-4 ">
          <div className="container">
            <Link className="navbar-brand text-white" to="/">
              START FRAMEWORK{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    conact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
