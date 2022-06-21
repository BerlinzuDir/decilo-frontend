import React, { FunctionComponent } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from "next/router";

import type { RequiredStringSchema } from "yup/lib/string";
import type { StringSchema } from "yup";
import type { AnyObject } from "yup/lib/types";

import { Language } from "../pages";

export interface ContactFormData {
  header: string;
  formFields: Record<string, Record<string, string>>;
  submitButton: string;
  successPage: Record<string, string>;
}

interface ContactFormProps {
  header: string;
  formFields: Record<string, Record<string, string>>;
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
  const { register, handleSubmit, formState } = useForm(formOptions(formFields));
  const { errors } = formState;

  const router = useRouter();
  function onSubmit() {
    router.push({ pathname: "/submit", query: { state: language } });
    return false;
  }

  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg align-self-center ps-4 pe-4">
          <h5 className="text-dark">{header}</h5>
          <div className="card-background rounded">
            <div className="card-body">
              <form name='contact-form' data-netlify="true" method="POST" data-netlify-honeypot="bot-field">
                {/* This hidden field is required because of https://community.netlify.com/t/forms-not-being-sent-with-next-js/15602 */}
                <input type="hidden" name="form-name" value="contact-form" />
                <p className="visually-hidden">
                  <label> Don not fill this out if you are human:{" "} <input name="bot-field" /> </label>
                </p>
                <div className="form-row mb-3">
                  <div className="input-group col-lg">
                    <div className="col pe-2">
                      <input
                        type="text"
                        {...register('firstName')}
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        placeholder={formFields["firstName"]["name"]}
                      />
                      <div className="invalid-feedback">{errors.firstName?.message}</div>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        {...register('lastName')}
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        placeholder={formFields["lastName"]["name"]}
                      />
                      <div className="invalid-feedback">{errors.lastName?.message}</div>
                    </div>
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder={formFields["company"]["name"]}
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text" {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder={formFields["email"]["name"]}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text"
                      className={`form-control`}
                      placeholder={formFields["phone"]["name"]}
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <textarea
                      className={`form-control`}
                      placeholder={formFields["message"]["name"]}
                      style={{ height: "10rem" }}
                    />
                  </div>
                </div>
                <div className="form-group form-check mb-3">
                  <input type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                  <label htmlFor="acceptTerms" className="form-check-label text-uppercase">
                    <a href="#" className="link-secondary">{formFields["acceptTerms"]["name"]} </a>
                  </label>
                  <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-submit text-primary mr-1 pe-4 ps-4">{submitButton}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
}

function formOptions(formFields: Record<string, Record<string, string>>) {
  const validationSchema = Yup.object().shape(yupRecord(formFields));
  return { resolver: yupResolver(validationSchema) };
}

function yupRecord(formFields: Record<string, Record<string, string>>) {
  let yupRecord: Record<string, RequiredStringSchema<string | undefined, AnyObject> | StringSchema<string | undefined, AnyObject, string | undefined> | Yup.BooleanSchema<boolean | undefined, AnyObject, boolean | undefined>> = {}
  for (const key in formFields) {
    if (key === "acceptTerms") {
      yupRecord[key] = formFields[key]["required"] == "true" ? Yup.bool().oneOf([true], '') : Yup.string()
    }
    else if (key == "email") {
      yupRecord[key] = formFields[key]["required"] == "true" ? Yup.string().required('').email(formFields["email"]["invalidEmailMsg"]) : Yup.string()
    }
    else {
      yupRecord[key] = formFields[key]["required"] == "true" ? Yup.string().required('') : Yup.string()
    }
  }
  return yupRecord
}

export default ContactForm;
