import React, { Component } from "react";
import logo from "../images/avataaars (1).svg"
// import { Outlet } from 'react-router-dom'
import "../HOME/Style.module.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="bg-info d-flex justify-content-center align-items-center flex-column py-5">
          <div className="img text-center">
            <img className="w-75 " src={logo} alt="" />
          </div>

          <div className="text col-1g-3 col-sm-8 text-white text-center">
            <h1>START FRAMEWORK</h1>
            <i class="fa-solid fa-star pt-2 pb-4"></i>
            {/* <img src={require("../images/poert1.png")} alt="" /> */}
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </header>
      </>
    );
  }
}


