


import React, { Component } from 'react'
import contactCss from "../CONTACT/StyleContact.module.css"
import "./MaineContact"
// import { Link , Outlet } from 'react-router-dom'
// import Navbar from '../NAVBAR/Navbar'



export default class Broject extends Component {
  render() {
    return <>

        <header className='bg-whute d-flex  justify-content-center align-items-center flex-column py-5'>
        

          <div className="col-lg-5 col-md-10 text-center">
          <h1>CONATCT SECTION</h1>
          <i class={contactCss.icon + " fa-solid fa-star pt-2 pb-4"}></i>

          </div>
                <div className='container'>
                <form action="" className='text-center  col-lg-8 col-sm-10 m-auto container'>
                  
                  <input id='Name' type="text" className='col-12 p-3 ' placeholder='Yoser Name'/>
                  
                  <input type="text" className='col-12 p-3' placeholder='Yoser Age'/>

                  <input type="email" className='col-12 p-3' placeholder='Yoser Email'/>

                  <input type="password" className='col-12 p-3' placeholder='Yoser Password'/>

                  <button type="button" class="btn btn-info text-white d-block mt-2 ">Secondary</button>
                </form>
                </div>
                
                

            
        </header>
      </>
    
  }
}
