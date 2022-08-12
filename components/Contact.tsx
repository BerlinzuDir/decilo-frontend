import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import * as R from "ramda";

import { Language } from "../hooks/useLanguage";

export interface ContactData {
  textFields: Array<string>;
  button: string;
}

interface ContactProps {
  textFields: Array<string>;
  button: string;
  language: Language;
}

const Contact: FunctionComponent<ContactProps> = ({
  textFields,
  button,
  language,
}) => {
  const router = useRouter();
  const contactAction = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    await router.push(`/contact?state=${language}#Heading`);
  };
  return (
    <div className="col p-3 mt-4 mb-5 rounded-3 decilo-background">
      <div className="container-fluid background-logo">
        <div className="text text-white pt-4 text-uppercase">
          {R.map(renderTextFields, textFields)}
        </div>
        <div className="text-center pb-4 p-4">
          <button
            type="button"
            className="btn btn-default text-white fw-bold"
            onClick={contactAction}
          >
            {button}
          </button>
        </div>
      </div>
    </div>
  );
};

interface TextFieldData {
  textField: string;
}

const renderTextFields = (textField: string) => (
  <TextField key={textField} textField={textField} />
);

const TextField: FunctionComponent<TextFieldData> = ({ textField }) => {
  return (
    <p className="p-0 m-0">
      {textField} <br />
    </p>
  );
};

export default Contact;
