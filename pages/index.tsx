import React, { FunctionComponent } from "react";

import Abstract, { AbstractData } from "../components/Abstract";
import Benefits, { BenefitsData } from "../components/Benefits";
import Contact, { ContactData } from "../components/Contact";
import LayoutWithHero, { LayoutContent } from "../components/LayoutWithHero";

import { useLanguage } from "../hooks/useLanguage";

import content from "../content/content.json";
import Heading from "../components/Heading";

interface LocalizedContent extends LayoutContent {
  abstract: AbstractData;
  contact: ContactData;
  benefits: BenefitsData;
}

const Home: FunctionComponent = () => {
  const [language, setLanguage] = useLanguage();
  const localizedContent: LocalizedContent = content[language];
  return (
    <LayoutWithHero
      content={localizedContent}
      language={language}
      setLanguage={setLanguage}
    >
      <Heading {...localizedContent.heading} />
      <Abstract {...localizedContent["abstract"]} />
      <Benefits {...localizedContent["benefits"]} />
      <Contact {...localizedContent["contact"]} language={language} />
    </LayoutWithHero>
  );
};

export default Home;
