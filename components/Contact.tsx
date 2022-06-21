import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import * as R from "ramda";

import { Language } from "../pages/index";

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
    <div className="container-fluid ps-4 pe-4 pt-5 pb-5 ps-3">
      <div className="row">
      <div className="col-sm-1"></div>
        <div className="col rounded-3 decilo-background">
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
        <div className="col-lg-1"></div>
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
