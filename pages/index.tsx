import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Header, { HeaderData } from "../components/Header";
import FAQ, { FAQData } from "../components/FAQ";
import Footer, { FooterData } from "../components/Footer";
import Hero from "../components/Hero";
import Heading, { HeadingData } from "../components/Heading";
import Benefits, { BenefitsData } from "../components/Benefits";
import Contact, { ContactData } from "../components/Contact";

import content from "../content/content.json";

interface LocalizedContent {
  Header: HeaderData;
  Heading: HeadingData;
  Contact: ContactData;
  FAQ: FAQData;
  Footer: FooterData;
  Benefits: BenefitsData;
}

export type Language = "EN" | "DE";

const Home: FunctionComponent = () => {
  const router = useRouter();
  const lang = (router.query.state && router.isReady) ? router.query.state as Language : "DE"
  const [language, setLanguage] = useState<Language>(lang);
  const localizedContent: LocalizedContent = content[language];
  return (
    <div>
      <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
      <Hero language={language} />
      <div className={"container-sm"}>
        <Heading {...localizedContent["Heading"]}></Heading>
        <Benefits {...localizedContent["Benefits"]}></Benefits>
        <Contact {...localizedContent["Contact"]} language={language} />
        <FAQ {...localizedContent["FAQ"]}></FAQ>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

export default Home;
