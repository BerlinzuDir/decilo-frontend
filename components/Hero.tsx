import React from "react";
import logo from "../public/images/logo_weiß_vertikal.png";
import fancyObject from "../public/images/fancy_object.png";

export default function Hero() {
  return (
    <div className="container-fluid hero">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col align-self-center">
          <img
            src={logo.src}
            className="img-fluid p-3 float-start"
            alt="DeCiLo Logo"
          />
        </div>
        <div className="col align-self-end">
          <img
            src={fancyObject.src}
            className="img-fluid pr-2 pt-5 float-end"
            alt=""
          />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}
