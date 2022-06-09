import React from 'react'
import hero from '../public/images/hero.png'
import logo from '../public/images/logo_weiß_vertikal.png'
import fancyObject from '../public/images/fancy_object.png'


export default function Hero() {
  return (
    <div className='container-fluid hero p-0 m-0'>
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
          <img src={logo.src} className="img-fluid" height="100%" />
        </div>
        <div className="col">
          <img src={fancyObject.src} className="img-fluid" height="100%" />
        </div>
      </div>
    </div>
  )
}
