import React from 'react'
import hero from '../public/images/hero.png'
import logo from '../public/images/logo_weiß_vertikal.png'
import fancyObject from '../public/images/fancy_object.png'


export default function Hero() {
  return (
    <div className='container-fluid hero'>
      <div className="row">
        <div className="col-lg-1">
        </div>
        <div className="col align-self-center">
          <img src={logo.src} className="img-fluid p-3 float-start vw-75"/>
        </div>
        <div className="col align-self-end">
          <img src={fancyObject.src} className="img-fluid pr-2 pt-5 float-end"/>
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}
