import React, { Component } from 'react'
import './main.css'

export default class Header extends Component {
  render() {
    return (
      <div id='header' className='bg-dark py-1'>
        <div className='container d-flex justify-content-between align-items-center text-white mt-3'>
        <h5>
        Start Bootstrap
        </h5>
        <div className='d-flex '>
            <p className='pe-3'>Home</p>
            <p className='pe-3 text-secondary'>About</p>
            <p className='pe-3 text-secondary'>Contact</p>
        </div>
        </div>
      </div>
    )
  }
}
