import React, { FunctionComponent } from "react";
import { useRouter } from 'next/router'
import content from "../content/content.json";
import {Language} from "./index"

type SuccessPageContent = Record<string, string>

const Success: FunctionComponent = () => {
    const router = useRouter()
    const query = router.query
    const lang = query.lang as Language
    if(!lang) {
        return <></>;
      }
    const successpageContent: SuccessPageContent = content[lang]["contactForm"]["successPage"]
    return (
        <div className="container-fluid p-5">
            <h4 className="text-center text-dark">
                {successpageContent["header"]}
            </h4>
            <p className="text-center text-dark">
                {successpageContent["text"]}
            </p>
        </div>
    );
};

export default Success;
