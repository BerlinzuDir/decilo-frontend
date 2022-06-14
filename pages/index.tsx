import React, { useState, FunctionComponent } from "react";

import Header, {HeaderData} from "../components/Header";
import Footer, {FooterData} from "../components/Footer";
import Hero from "../components/Hero";
import Heading, {HeadingData} from "../components/Heading";
import Benefits, {BenefitsData} from "../components/Benefits";
import FAQ from "../components/FAQ";
import ContactForm, {ContactFormData} from "../components/ContactForm";

import content from "../content/content.json";

interface LocalizedContent {
    Header: HeaderData
    Heading: HeadingData
    contactForm: ContactFormData
    Footer: FooterData
    Benefits: BenefitsData
}

export type Language = 'EN' | 'DE'

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
        <div className={'container-sm'}>

            <Heading {...localizedContent["Heading"]}></Heading>
            <Benefits {...localizedContent["Benefits"]}></Benefits>
            <ContactForm {...localizedContent["contactForm"]} language={language} />
            <FAQ></FAQ>

        </div>
        <Footer {...localizedContent["Footer"]} />
    </div>
  );
};

export default Home;
