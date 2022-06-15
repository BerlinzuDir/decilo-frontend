import React, { useState, FunctionComponent } from "react";

import Header, { HeaderData } from "../components/Header";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";

type SuccessPageContent = Record<string, string>;

interface LocalizedContent {
  Header: HeaderData;
  Footer: FooterData;
}

export type Language = "EN" | "DE";

const Success: FunctionComponent = () => {
  const [language, setLanguage] = useState<Language>("DE");
  const successpageContent: SuccessPageContent = content[language]["contactForm"]["successPage"];
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
      <Hero />
      <div className="container-fluid p-5">
        <h4 className="text-center text-dark">{successpageContent["header"]}</h4>
        <p className="text-center text-dark">{successpageContent["text"]}</p>
      </div>
      <Footer {...localizedContent["Footer"]} />
    </div>
  );
};

export default Success;
