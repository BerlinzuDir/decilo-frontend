import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";

import logo from "../public/images/logo_weiß_vertikal.png";
import fancyObject from "../public/images/fancy_object.png";

import { Language } from "../pages/index";

interface HeroProps {
  language: Language;
}

const Hero: FunctionComponent<HeroProps> = ({ language }) => {
  const router = useRouter();
  const logoAction = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await router.push({ pathname: "/", query: { state: language } });
  };
  return (
    <div className="container-fluid decilo-background">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col align-self-center p-3">
          <a href="#">
            <img
              src={logo.src}
              className="img-fluid float-start"
              alt="DeCiLo Logo"
              onClick={logoAction}
            ></img>
          </a>
        </div>
        <div className="col align-self-end p-1">
          <img src={fancyObject.src} className="img-fluid float-end" alt="" />
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Hero;
