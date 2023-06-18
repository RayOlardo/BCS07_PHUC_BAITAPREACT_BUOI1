import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='bg-light text-center my-5'>
       <div className='p-5 '>
       <h1 className='fs-1 fw-bold'>
        A warm welcome! 
        </h1>
        <p className='fs-3 px-5'>
        Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
        </p>
        <button className='btn btn-primary fs-5 p-2'>
        Call to action
        </button></div>
      </div>
    )
  }
}
