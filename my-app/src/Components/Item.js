import React, { Component } from "react";

export default class Item extends Component {
  render() {
    const myStyleItem = {
      padding: "5px 50px 40px",
    };
    const myStyleRadius = {
        borderRadius: '10px'
    }
    return (
      <div className="row gx-5">
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-solid fa-envelope-open-text p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">Fresh new layout</h3>
            <p className="">
            With Bootstrap 5, we've created a fresh new layout for this template!
            </p>
          </div>
        </div>
        </div>
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-solid fa-cloud-arrow-down p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">Fresh new layout</h3>
            <p className="">
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
        </div>
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-solid fa-credit-card p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">Jumbotron hero header</h3>
            <p className="">
            The heroic part of this template is the jumbotron hero header!
            </p>
          </div>
        </div>
        </div>
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-brands fa-bootstrap p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">Feature boxes</h3>
            <p className="">
            We've created some custom feature boxes using Bootstrap icons!
            </p>
          </div>
        </div>
        </div>
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-solid fa-code p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">Simple clean code</h3>
            <p className="">
            We keep our dependencies up to date and squash bugs as they come!
            </p>
          </div>
        </div>
        </div>
        <div className="my-5 col-6 ">
        <div className="bg-light text-center "
        style={myStyleRadius}>
        <i
            class="fa-regular fa-circle-check p-3 fs-3 bg-primary text-white position-relative"
            style={{ top: "-23px", borderRadius: "6px" }}
          ></i>
          <div className="" style={myStyleItem}>
            <h3 className="fw-bold">A name you trust</h3>
            <p className="">
            Start Bootstrap has been the leader in free Bootstrap templates since 2013!
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
