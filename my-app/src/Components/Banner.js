import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div id='banner' className='bg-light my-5'>
       <div className='p-5 '>
       <h1 style={{fontSize: '60px'}} className='fw-bold'>
        A warm welcome! 
        </h1>
        <p style={{fontSize: '18px'}} className='text-secondary'>
        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. removed from the framework. 
        </p>
        <button className='btn btn-primary fs-5 p-2'>
        Call to action
        </button></div>
      </div>
    )
  }
}
