import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const lang = (router.query.state && router.isReady) ? router.query.state as Language : "DE"
  const [language, setLanguage] = useState<Language>(lang);
  const successpageContent: SuccessPageContent = content[language]["contactForm"]["successPage"];
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
      <Hero />
      <div className={"container-sm"}>
        <div className="container-fluid p-5">
          <h4 className="text-center text-dark">{successpageContent["header"]}</h4>
          <p className="text-center text-dark">{successpageContent["text"]}</p>
        </div>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );

};

export default Success;
