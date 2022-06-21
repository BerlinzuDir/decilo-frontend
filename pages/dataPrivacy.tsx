import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import * as R from "ramda";

import Navbar, { NavbarData } from "../components/Navbar";
import Heading, { HeadingData } from "../components/Heading";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import html from "../content/dataPrivacy.html";
import content from "../content/content.json";

interface LocalizedContent {
  Navbar: NavbarData;
  Heading: HeadingData;
  Footer: FooterData;
}

export type Language = "EN" | "DE";

const DataPrivacy: FunctionComponent = () => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "DE";
  const [language, setLanguage] = useState<Language>(lang);
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Navbar
        {...localizedContent["Navbar"]}
        setLanguage={setLanguage}
        language={language}
      />
      <Hero language={language} />
      <div className={"container-sm pb-5"}>
        <Heading {...localizedContent["Heading"]} />
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm align-self-center">
              <div className="text-dark"> {parse(styleHTML(html))} </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

function styleHTML(html: string): any {
  const replaceAll = R.invoker(2, "replaceAll");

  return R.pipe(
    replaceAll("<html>", ""),
    replaceAll("</html>", ""),
    replaceAll("<h3", "<p classname='fs-5'"),
    replaceAll("</h3>", "</p>"),
    replaceAll("<h2", '<p classname="fs-5"'),
    replaceAll("</h2>", "</p>"),
    replaceAll("<h1", "<h4"),
    replaceAll("</h1>", "</h4>")
  )(html);
}

export default DataPrivacy;
