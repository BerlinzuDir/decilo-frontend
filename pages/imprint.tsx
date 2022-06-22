import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Navbar, { NavbarData } from "../components/Navbar";
import Heading, { HeadingData } from "../components/Heading";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";

type ImprintPageContent = Record<string, string | Record<string, string>>;

interface LocalizedContent {
  Navbar: NavbarData;
  Heading: HeadingData;
  Footer: FooterData;
}

export type Language = "EN" | "DE";

const Imprint: FunctionComponent = () => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "DE";
  const [language, setLanguage] = useState<Language>(lang);
  const ImprintPageContent: ImprintPageContent = content[language]["Imprint"];
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
        <div id="Heading">
          <Heading {...localizedContent["Heading"]} />
        </div>
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm align-self-start">
              <h4 className="text text-dark pb-4">
                {ImprintPageContent["header"]}
              </h4>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-sm align-self-start">
              <div className="text-dark">
                {renderTextBlock(ImprintPageContent["address"])}
              </div>
              {/* 
              <div className="text text-dark">
                {renderTextBlock(ImprintPageContent["contact"])}
              </div>
              */}
              <div className="text text-dark">
                {renderTextBlock(ImprintPageContent["email"])}
              </div>
            </div>
            <div className="col-sm align-self-start">
              {/*
              <div className="text text-dark">
                {renderTextBlock(ImprintPageContent["taxId"])}
              </div>
            */}
              <div className="text text-dark">
                {renderTextBlock(ImprintPageContent["registerDetails"])}
              </div>
              <div className="text text-dark">
                {renderTextBlock(ImprintPageContent["managingDirector"])}
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

function renderTextBlock(textBlock: string | Record<string, string>) {
  return (
    <div>
      {Object.entries(textBlock).map(([key, value]) => (
        <p key={key} className="m-0">
          {value}
        </p>
      ))}
      <br />
    </div>
  );
}

export default Imprint;
