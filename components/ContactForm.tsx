import React, { FunctionComponent } from "react";
import {Language} from "../pages/index"


export interface ContactFormData {
  header: string,
  formFields: Array<Record<string,string>>,
  submitButton: string,
  successPage: Record<string, string>,
}

interface ContactFormProps {
  header: string,
  formFields: Array<Record<string,string>>,
  submitButton: string,
  successPage: Record<string, string>,
  language: Language;
}

const ContactForm: FunctionComponent<ContactFormProps> = ({
  header,
  formFields,
  submitButton,
  language,
}) => {
  const successAction: string = "/success?lang=" + language
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 align-self-center p-4">
          <h5 className="text-dark">{header}</h5>
          <form id="contactForm needs-validation" data-netlify="true" action={successAction} method="POST" netlify-honeypot="bot-field">
            <p className="visually-hidden">
              <label>
                Don not fill this out if you are human: <input name="bot-field" />
              </label>
            </p>
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="name">Name</label>
              <input className="form-control" id="name" type="text" placeholder="Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="emailAddress">Email Address</label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" placeholder="Message" style={{ height: "10rem" }} required></textarea>
            </div>
            <button className="btn btn-primary text-white" type="submit">{submitButton}</button>
          </form>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  )
};

export interface ContactFieldData {
  formField: Record<string, string>
}

const ContactField: FunctionComponent<ContactFieldData> = ( {formField} ) => {
  return <div></div>
}

export default ContactForm;
