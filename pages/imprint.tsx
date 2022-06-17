import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Header, { HeaderData } from "../components/Header";
import Heading, { HeadingData } from "../components/Heading";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";

type ImprintPageContent = Record<string, string>;

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
    const ImprintPageContent: ImprintPageContent = content[language]["Imprint"];
    const localizedContent: LocalizedContent = content[language];
    return (
        <div>
            <Header {...localizedContent["Header"]} setLanguage={setLanguage} />
            <Hero />
            <div className={"container-sm"}>
                <Heading {...localizedContent["Heading"]} />
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col align-self-center">
                            <h4 className="text text-dark ps-3">{ImprintPageContent["header"]}</h4>
                            <p className="text text-dark ps-3">{ImprintPageContent["text"]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer {...localizedContent["Footer"]} />
        </div >
    );

};

export default Imprint;
