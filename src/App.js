


import React, { Component } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Home from './componaent/HOME/Home.jsx'
import About from './componaent/ABOUT/About.jsx'
import Contact from './componaent/CONTACT/Contact.jsx'
import Portfolio from './componaent/PORTFOLIO/Portfolio.jsx'
import Layoute from './componaent/LAYoute/Layoute.jsx'
// import { createPortal } from 'react-dom'



let myRouter = createHashRouter ([

  

  {path : "/"    , element : <Layoute/> , children : [

    {path : "" ,  element : <Home/>},

    {path : "home" , index: true , element : <Home/>},
  
    {path : "about" , element : <About/>},

    {path : "contact" , element : <Contact/>},

    {path : "Portfolio" , element : <Portfolio/>},

    {path : "*" , element : <h1>4  0  4  not found beage</h1>},

  ]},


  
    
  
])



export default class App extends Component {
  render() {
    return <>
        
        
        <RouterProvider router={myRouter}/>



      </>
    
  }
}


