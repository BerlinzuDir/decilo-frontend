import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/router";
import * as R from "ramda";

import type { RequiredStringSchema } from "yup/lib/string";
import type { StringSchema } from "yup";
import type { AnyObject } from "yup/lib/types";

import { Language } from "../../pages";

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

const concatObjectKeyValueWithEqualsAndAddToList = (
  l: Array<string>,
  [key, value]: [string, string]
) => {
  return [...l, encodeURIComponent(key) + "=" + encodeURIComponent(value)];
};

export const encode: (data: Record<string, string>) => string = R.pipe(
  (data) => Object.entries(data),
  R.reduce(concatObjectKeyValueWithEqualsAndAddToList, []),
  R.join("&")
);

type Payload = {
  method: string;
  headers: Record<string, string>;
  body: string;
};

const ContactForm: FunctionComponent<ContactFormProps> = ({
  header,
  formFields,
  submitButton,
  language,
}) => {
  const { register, handleSubmit, formState } = useForm(
    formOptions(formFields)
  );
  const { errors } = formState;

  const router = useRouter();

  const onSubmit = (data: Record<string, string>): Promise<boolean> =>
    R.pipe(
      R.assoc("form-name", "contact-form"),
      encode,
      R.applySpec<Payload>({
        method: R.always("POST"),
        headers: R.always({
          "Content-Type": "application/x-www-form-urlencoded",
        }),
        body: R.identity,
      }),
      (payload) => fetch("/", payload),
      R.andThen(() =>
        router.push({ pathname: "/submit", query: { state: language } })
      )
    )(data);

  return (
    <div className="container-fluid pt-5 pb-5 ps-3">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm align-self-center pe-4">
          <h5 className="text-dark">{header}</h5>
          <div className="card-background rounded">
            <div className="card-body">
              <form
                name="contact-form"
                data-netlify="true"
                method="POST"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="visually-hidden">
                  <label>
                    {" "}
                    Don not fill this out if you are human:{" "}
                    <input name="bot-field" />{" "}
                  </label>
                </p>
                <div className="form-row mb-3">
                  <div className="input-group col-lg">
                    <div className="col pe-2">
                      <input
                        type="text"
                        {...register("firstName")}
                        className={`form-control ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        placeholder={formFields["firstName"]["name"]}
                      />
                      <div className="invalid-feedback">
                        {errors.firstName?.message}
                      </div>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        {...register("lastName")}
                        className={`form-control ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        placeholder={formFields["lastName"]["name"]}
                      />
                      <div className="invalid-feedback">
                        {errors.lastName?.message}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text"
                      {...register("company")}
                      className={`form-control`}
                      placeholder={formFields["company"]["name"]}
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text"
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder={formFields["email"]["name"]}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <input
                      type="text"
                      {...register("phoneNumber")}
                      className={`form-control`}
                      placeholder={formFields["phone"]["name"]}
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="form-group col">
                    <textarea
                      {...register("message")}
                      className={`form-control`}
                      placeholder={formFields["message"]["name"]}
                      style={{ height: "10rem" }}
                    />
                  </div>
                </div>
                <div className="form-group form-check mb-3">
                  <input
                    type="checkbox"
                    {...register("acceptTerms")}
                    id="acceptTerms"
                    className={`form-check-input ${
                      errors.acceptTerms ? "is-invalid" : ""
                    }`}
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="form-check-label text-uppercase"
                  >
                    <a
                      href="components/ContactForm/ContactForm#"
                      className="link-secondary"
                    >
                      {formFields["acceptTerms"]["name"]}{" "}
                    </a>
                  </label>
                  <div className="invalid-feedback">
                    {errors.acceptTerms?.message}
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-submit text-primary mr-1 pe-4 ps-4"
                  >
                    {submitButton}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

function formOptions(formFields: Record<string, Record<string, string>>) {
  const validationSchema = Yup.object().shape(yupRecord(formFields));
  return { resolver: yupResolver(validationSchema) };
}

function yupRecord(formFields: Record<string, Record<string, string>>) {
  let yupRecord: Record<
    string,
    | RequiredStringSchema<string | undefined>
    | StringSchema<string | undefined, AnyObject, string | undefined>
    | Yup.BooleanSchema<boolean | undefined, AnyObject, boolean | undefined>
  > = {};
  for (const key in formFields) {
    if (key === "acceptTerms") {
      yupRecord[key] =
        formFields[key]["required"] == "true"
          ? Yup.bool().oneOf([true], "")
          : Yup.string();
    } else if (key == "email") {
      yupRecord[key] =
        formFields[key]["required"] == "true"
          ? Yup.string()
              .required("")
              .email(formFields["email"]["invalidEmailMsg"])
          : Yup.string();
    } else {
      yupRecord[key] =
        formFields[key]["required"] == "true"
          ? Yup.string().required("")
          : Yup.string();
    }
  }
  return yupRecord;
}

export default ContactForm;
