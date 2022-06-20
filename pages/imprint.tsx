import React, { useState, FunctionComponent } from "react";
import { useRouter } from "next/router";

import Header, { HeaderData } from "../components/Header";
import Heading, { HeadingData } from "../components/Heading";
import Hero from "../components/Hero";
import Footer, { FooterData } from "../components/Footer";

import content from "../content/content.json";

type ImprintPageContent = Record<string, string | Record<string, string>>;

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
            <div className={"container-sm pb-5"}>
                <Heading {...localizedContent["Heading"]} />
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-sm align-self-center">
                            <h4 className="text text-dark pb-4">{ImprintPageContent["header"]}</h4>
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["address"])}</p>
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["contact"])}</p>
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["email"])}</p>
                        </div>
                        <div className="col-sm align-self-center">
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["taxId"])}</p>
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["registerDetails"])}</p>
                            <p className="text text-dark">{renderTextBlock(ImprintPageContent["managingDirector"])}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer {...localizedContent["Footer"]} language={language} />
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
