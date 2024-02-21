import React from "react";

export default function Fotar() {
  return (
    <>
      <div className="container-floud bg-dark py-5 position-relative">
        <div className="row g-5 container m-auto mb-3">
          <div className="col-lg-4 col-md-12 col-sm-12  text-center">
            <div className="inr text-white">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <h5>Clark, MO 65243</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12   d-flex justify-content-center ">
            <div className="inr text-white ">
              <h3>AROUND THE WEB</h3>
              <ul className="d-flex m-auto list-unstyled w-75  justify-content-between  ">
                <li className="">
                  <i class="fa-brands fa-twitter   border rounded-circle p-2"></i>
                </li>

                <li className="">
                  <i class="fa-brands fa-facebook   border rounded-circle p-2"></i>
                </li>

                <li>
                  <i class="fa-brands fa-linkedin   border rounded-circle p-2"></i>
                </li>

                <li>
                  <i class="fa-solid fa-globe   border rounded-circle p-2"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12  text-center">
            <div className="inr text-white">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme</p>
              <h5>created by Route</h5>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black py-2 d-flex justify-content-center align-items-center text-white position-absolute bottom-0 start-0 end-0">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
