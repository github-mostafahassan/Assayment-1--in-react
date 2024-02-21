import React, { Component } from "react";

// import bg1 from  "../images/poert1.png"

import portefoluoCss from "../PORTFOLIO/StylePotfolio.module.css";

export default class Portfolio extends Component {
  render() {
    return (
      <>
        <header className="d-flex justify-content-center align-items-center flex-column py-5 mb-3">
          <div className="test col-lg-8 col-md-10 text-center  p-5 m-auto">
            <h1>PORTFOLIO COMPONENT</h1>
            <i class="fa-solid fa-star pt-2 pb-4 "></i>
          </div>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <img
                    className="w-100 rounded"
                    src={require("../images/poert1.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port2.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port3.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container m-auto ">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
              >
                <div className="innar position-relative bg-info rounded d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/poert1.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 "
                data-bs-target="#exampleModal1"
                data-bs-toggle="modal"
              >
                <div className="innar1 bg-info rounded position-relative d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port2.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 "
                data-bs-target="#exampleModal2"
                data-bs-toggle="modal"
              >
                <div className="innar2 bg-info rounded position-relative d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port3.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 "
                data-bs-target="#exampleModal"
                data-bs-toggle="modal"
              >
                <div className="innar bg-info rounded position-relative d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/poert1.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 "
                data-bs-target="#exampleModal1"
                data-bs-toggle="modal"
              >
                <div className="innar1 bg-info rounded position-relative d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port2.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 "
                data-bs-target="#exampleModal2"
                data-bs-toggle="modal"
              >
                <div className="innar2 bg-info rounded position-relative d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 rounded"
                    src={require("../images/port3.png")}
                    alt=""
                  />

                  <div
                    className={
                      portefoluoCss.bls +
                      " position-absolute top-0 bottom-0 start-0 end-0 rounded d-flex justify-content-center align-items-center text-white  fw-bold"
                    }
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
