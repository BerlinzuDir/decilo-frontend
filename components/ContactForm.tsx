import React, { FunctionComponent, SyntheticEvent } from "react";
import { Language } from "../pages";
import { useRouter } from "next/router";

export interface ContactFormData {
  header: string;
  formFields: Array<Record<string, string>>;
  submitButton: string;
  successPage: Record<string, string>;
}

interface ContactFormProps {
  header: string;
  formFields: Array<Record<string, string>>;
  submitButton: string;
  successPage: Record<string, string>;
  language: Language;
}

const ContactForm: FunctionComponent<ContactFormProps> = ({
  header,
  formFields,
  submitButton,
  language,
}) => {
  const router = useRouter();
  const submitAction = async (e: SyntheticEvent<EventTarget>) => {
    router.push({pathname: "/submit", query: { state: language }});
};
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 align-self-center p-4">
          <h5 className="text-dark">{header}</h5>
          <form
            id="contactForm needs-validation"
            data-netlify="true"
            method="POST"
            netlify-honeypot="bot-field"
          >
            <p className="visually-hidden">
              <label>
                Don not fill this out if you are human:{" "}
                <input name="bot-field" />
              </label>
            </p>
            {formFields.map((fieldData) => (
              <FormField key={fieldData["name"]} formField={fieldData} />
            ))}
            <button
              className="btn btn-primary text-white"
              type="submit"
              onClick={submitAction}
            >
              {submitButton}
            </button>
          </form>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

interface FormFieldData {
  formField: Record<string, string>;
}

const FormField: FunctionComponent<FormFieldData> = ({ formField }) => {
  return (
    <div className="mb-3">
      <Input name={formField["name"]} type={formField["type"]} />
    </div>
  );
};

interface InputData {
  name: string;
  type: string;
}

const Input: FunctionComponent<InputData> = ({ name, type }) => {
  if (type == "text" || type == "email") {
    return (
      <input
        className="form-control"
        id={name}
        type={type}
        placeholder={name}
        required
      />
    );
  } else if (type == "textArea") {
    return (
      <textarea
        className="form-control"
        id={name}
        placeholder={name}
        style={{ height: "10rem" }}
        required
      />
    );
  } else {
    return null;
  }
};

export default ContactForm;
