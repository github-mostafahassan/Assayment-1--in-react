


import React, { Component } from 'react'
import aboutCss from "../ABOUT/StyleAboute.module.css"
// import Navbar from '../NAVBAR/Navbar'

// import { Outlet } from 'react-router-dom'


export default class About extends Component {
  render() {
    return <>


    <header className=' bg-info d-flex justify-content-center align-items-center flex-column text-white py-5'>

    <h1 className='fw-bold'>ABOUT COMPONENT</h1>
          <i class={aboutCss.icon + " fa-solid fa-star pt-2 pb-4 "}></i>

    <div className='container'>

<div className="row container">
  <div className="col-lg-6 c0l-md-12">
    <div className="innar">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

    </div>
  </div>

  <div className="col-lg-6 c0l-md-12">
    <div className="innar">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      
    </div>
  </div>
</div>

</div>
    </header>



      </>
  }
}


