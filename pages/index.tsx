import React, { useState } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Heading from '../components/Heading'
import Benefits from '../components/Benefits'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

import content from "../content/content.json"

export default function Home() {
  const [language, setLanguage] = useState("DE")

  return (
    <div>
      <Header content={content[language]["Header"]} setLanguage={setLanguage}></Header>
      <Hero></Hero>
      <Heading content={content[language]["Heading"]}></Heading>
      <Benefits></Benefits>
      <Contact></Contact>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  )
}
