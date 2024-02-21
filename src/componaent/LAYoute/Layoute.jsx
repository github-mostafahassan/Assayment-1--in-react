


import React, { Component } from 'react'
import Navbar from '../NAVBAR/Navbar'
import { Outlet } from 'react-router-dom'
import Fotar from '../FOTAR/Fotar'


export default class Layoute extends Component {
  render() {
    return <>
    
    <Navbar/>

    <Outlet/>

    <Fotar/>
    </>
  }
}
