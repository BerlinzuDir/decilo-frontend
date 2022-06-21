import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Navbar, { NavbarData } from "../components/Navbar";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";
import { Language } from "./index";

type SuccessPageContent = Record<string, string>;

interface LocalizedContent {
  Navbar: NavbarData;
  Footer: FooterData;
}

const Success: FunctionComponent = () => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "DE";
  const [language, setLanguage] = useState<Language>(lang);
  const successpageContent: SuccessPageContent =
    content[language]["contactForm"]["successPage"];
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Navbar {...localizedContent["Navbar"]} setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <div className={"container-sm"}>
        <div className="container-fluid p-5">
          <h4 className="text-center text-dark">
            {successpageContent["header"]}
          </h4>
          <p className="text-center text-dark">{successpageContent["text"]}</p>
        </div>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

export default Success;
