import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Navbar, { NavbarData } from "../components/Navbar";
import Hero from "../components/Hero";
import Heading, { HeadingData } from "../components/Heading";
import ContactForm, { ContactFormData } from "../components/ContactForm";
import Footer, { FooterData } from "../components/Footer";
import { Language } from "./index";

import content from "../content/content.json";

interface LocalizedContent {
  Navbar: NavbarData;
  Heading: HeadingData;
  contactForm: ContactFormData;
  Footer: FooterData;
}

const Contact: FunctionComponent = () => {
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
      <div className={"container-sm"}>
        <div id="Heading">
          <Heading {...localizedContent["Heading"]} />
        </div>
        <ContactForm {...localizedContent["contactForm"]} language={language} />
      </div>
      <Footer {...localizedContent["Footer"]} language={language} />
    </div>
  );
};

export default Contact;
