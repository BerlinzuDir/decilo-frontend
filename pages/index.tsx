import React, { useState, FunctionComponent } from "react";

import Header, {HeaderData} from "../components/Header";
import FAQ, {FAQData} from "../components/FAQ";
import Footer, {FooterData} from "../components/Footer";
import Hero from "../components/Hero";
import Heading, {HeadingData} from "../components/Heading";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";

import content from "../content/content.json";

interface LocalizedContent {
    Header: HeaderData
    Heading: HeadingData
    FAQ: FAQData
    Footer: FooterData
}

type Language = 'EN' | 'DE'

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
      <Heading {...localizedContent["Heading"]}></Heading>
      <Benefits></Benefits>
      <Contact></Contact>
      <FAQ {...localizedContent["FAQ"]}></FAQ>
      <Footer {...localizedContent["Footer"]} />
    </div>
  );
};

export default Home;
