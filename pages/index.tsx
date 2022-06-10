import React, { useState, FunctionComponent } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import Benefits from "../components/Benefits";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

import content from "../content/content.json";

const Home: FunctionComponent = () => {
  const [language, setLanguage] = useState("DE");
  const localizedContent = content[language];

  return (
    <div>
      <Header content={localizedContent} setLanguage={setLanguage}></Header>
      <Hero></Hero>
      <Heading></Heading>
      <Benefits></Benefits>
      <Contact></Contact>
      <FAQ></FAQ>
      <Footer {...localizedContent["Footer"]} />
    </div>
  );
};

export default Home;
