import React, { Component } from "react";

export default class Item extends Component {
  render() {
   
   
    return (
     <div id="item">
      <div className="row">
      {Array(4).fill().map((_, index) => (
      <div className="col-3 text-center" key={index}>
       <div className="item__top">
          <p>500x325</p>
        </div>
        <div className="item__center p-4">
          <p className="px-2 fs-4 fw-bold">Card title</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, minima corrupti. Vel nam possimus
            excepturi quaerat, eligendi quasi nobis culpa?
          </p>
        </div>
        <div className="item__bottom">
          <button className="btn btn-primary my-2">Find Out More!</button>
        </div>
      </div>
    ))}
      </div>
     </div>
    );
  }
}
