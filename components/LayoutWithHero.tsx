import React, { FunctionComponent } from "react";
import Navbar, { NavbarData } from "./Navbar";
import Hero from "./Hero";
import { HeadingData } from "./Heading";
import Footer, { FooterData } from "./Footer";
import { Language } from "../hooks/useLanguage";

export interface LayoutContent {
  navbar: NavbarData;
  heading: HeadingData;
  footer: FooterData;
}

interface LayoutWithHeroProps {
  content: LayoutContent;
  language: Language;
  setLanguage: (language: Language) => void;
}

const LayoutWithHero: FunctionComponent<LayoutWithHeroProps> = ({
  content: { heading, navbar, footer },
  language,
  setLanguage,
  children,
}) => {
  return (
    <div>
      <Navbar {...navbar} language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <div className={"container-sm"}>
        <div className="container-fluid pt-5 ps-3">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col align-self-center">{children}</div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      <Footer {...footer} language={language} />
    </div>
  );
};

export default LayoutWithHero;
