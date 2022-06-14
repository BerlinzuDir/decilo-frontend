import React, { useState, FunctionComponent } from "react";

export interface ContactFormData {
}

const ContactForm: FunctionComponent<ContactFormData> = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 align-self-center p-4">
          <h5 className="text-dark">Contact us!</h5>
          <form id="contactForm needs-validation">
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="name">Name</label>
              <input className="form-control" id="name" type="text" placeholder="Name" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="emailAddress">Email Address</label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" required />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" placeholder="Message" style={{ height: "10rem" }} required></textarea>
            </div>
            <button className="btn btn-primary text-white" type="submit">Submit</button>
          </form>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  )
};

export default ContactForm;
