import React, { FunctionComponent } from "react";

import { NavbarData } from "../components/Navbar";
import { HeadingData } from "../components/Heading";
import ContactForm, { ContactFormData } from "../components/ContactForm";
import { FooterData } from "../components/Footer";
import LayoutWithHero from "../components/LayoutWithHero";

import content from "../content/content.json";
import { useLanguage } from "../hooks/useLanguage";

export interface LocalizedContent {
  navbar: NavbarData;
  heading: HeadingData;
  contactForm: ContactFormData;
  footer: FooterData;
}

const Contact: FunctionComponent = () => {
  const [language, setLanguage] = useLanguage();
  const localizedContent: LocalizedContent = content[language];
  return (
    <LayoutWithHero
      content={localizedContent}
      language={language}
      setLanguage={setLanguage}
    >
      <ContactForm {...localizedContent.contactForm} language={language} />
    </LayoutWithHero>
  );
};

export default Contact;
