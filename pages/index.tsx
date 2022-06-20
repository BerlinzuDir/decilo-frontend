import React, { useState, FunctionComponent } from "react";

import Header, { HeaderData } from "../components/Header";
import FAQ, { FAQData } from "../components/FAQ";
import Footer, { FooterData } from "../components/Footer";
import Hero from "../components/Hero";
import Heading, { HeadingData } from "../components/Heading";
import Abstract, { AbstractData } from "../components/Abstract";
import Benefits, { BenefitsData } from "../components/Benefits";
import Contact, {ContactData} from "../components/Contact";

import content from "../content/content.json";

interface LocalizedContent {
  Header: HeaderData;
  Heading: HeadingData;
  Abstract: AbstractData;
  Contact: ContactData;
  FAQ: FAQData;
  Footer: FooterData;
  Benefits: BenefitsData;
}

export type Language = "EN" | "DE";

const Home: FunctionComponent = () => {
  const [language, setLanguage] = useState<Language>("DE");
  const localizedContent: LocalizedContent = content[language];

  return (
    <div>
      <Header
        {...localizedContent["Header"]}
        setLanguage={setLanguage}
      ></Header>
      <Hero></Hero>
      <div className={"container-sm"}>
        <Heading {...localizedContent["Heading"]} />
        <Abstract {...localizedContent["Abstract"]} />
        <Benefits {...localizedContent["Benefits"]} />
        <Contact {...localizedContent["Contact"]} language={language}/>
        <FAQ {...localizedContent["FAQ"]}></FAQ>
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

export default Home;
