import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";
import ReactHtmlParser from 'react-html-parser'; 

import Header, { HeaderData } from "../components/Header";
import Heading, { HeadingData } from "../components/Heading";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";

type DataPrivacyPageContent = any

interface LocalizedContent {
    Header: HeaderData;
    Heading: HeadingData,
    Footer: FooterData;
}

export type Language = "EN" | "DE";

const Imprint: FunctionComponent = () => {
    const router = useRouter();
    const lang = (router.query.state && router.isReady) ? router.query.state as Language : "DE"
    const [language, setLanguage] = useState<Language>(lang);
    const DataPrivacyPageContent: DataPrivacyPageContent = "<html><p>test</p></html>";
    const localizedContent: LocalizedContent = content[language];
    return (
        <div>
            <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
            <Hero />
            <div className={"container-sm pb-5"}>
                <Heading {...localizedContent["Heading"]} />
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-sm align-self-center">
                        <div> { ReactHtmlParser (DataPrivacyPageContent) } </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer {...localizedContent["Footer"]} />
        </div >
    );

};

function renderTextBlock(textBlock: string | Record<string, string>) {
    return (
        <div>
            {Object.entries(textBlock).map(([key, value]) => (
                <p key={key} className="m-0">{value}</p>
            ))}
        </div>
    )
}

export default Imprint;
