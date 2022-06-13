import React, { useState, FunctionComponent } from "react";

export interface ContactData {
}

const Contact: FunctionComponent<ContactData> = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col align-self-center p-4">
        <h5 className="text-dark">Get in touch!</h5>
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label text-dark" form="name">Name</label>
              <input className="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
              <div className="invalid-feedback" data-sb-feedback="name:required">Name is required.</div>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" form="emailAddress">Email Address</label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
              <div className="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div>
              <div className="invalid-feedback" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" form="message">Message</label>
              <textarea className="form-control" id="message" placeholder="Message" style={{ height: "10rem" }} data-sb-validations="required"></textarea>
              <div className="invalid-feedback" data-sb-feedback="message:required">Message is required.</div>
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3">Form submission successful!</div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-lg text-white" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  )
};

export default Contact;
