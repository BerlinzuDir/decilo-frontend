import React, { useState, FunctionComponent } from "react";

import Header, { HeaderData } from "../components/Header";
import Hero from "../components/Hero";
import Heading, { HeadingData } from "../components/Heading";
import ContactForm, { ContactFormData } from "../components/ContactForm";
import Footer, { FooterData } from "../components/Footer";
import { Language } from "./index";

import content from "../content/content.json";


interface LocalizedContent {
    Header: HeaderData;
    Heading: HeadingData;
    contactForm: ContactFormData;
    Footer: FooterData;
}

const Contact: FunctionComponent = () => {
    const [language, setLanguage] = useState<Language>("DE");
    const localizedContent: LocalizedContent = content[language];
    return (
        <div>
            <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
            <Hero />
            <Heading {...localizedContent["Heading"]}></Heading>
            <ContactForm {...localizedContent["contactForm"]} language={language} />
            <Footer {...localizedContent["Footer"]} />
        </div>
    );
};

export default Contact;
