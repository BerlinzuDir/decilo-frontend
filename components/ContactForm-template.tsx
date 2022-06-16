import React, { FunctionComponent, SyntheticEvent } from "react";
import { useForm } from 'react-hook-form';
import type { UseFormRegister, FieldValues } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
  function onSubmit(data: any) {
    router.push({ pathname: "/submit", query: { state: language } });
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required'),
    lastName: Yup.string()
      .required('Last name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    acceptTerms: Yup.bool()
      .oneOf([true], 'Accept Ts & Cs is required')
  });

  console.log(validationSchema)
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 align-self-center p-4">
          <h5 className="text-dark">{header}</h5>
          <form id="contactForm needs-validation" data-netlify="true" method="POST" netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
            <p className="visually-hidden">
              <label> Don not fill this out if you are human:{" "} <input name="bot-field" /> </label>
            </p>
            {formFields.map((fieldData) => (<FormField key={fieldData["name"]} formField={fieldData} register={register} errors={errors} />))}
            <button className="btn btn-primary text-white" type="submit"> {submitButton}</button>
          </form>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

interface FormFieldData {
  formField: Record<string, string>;
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const FormField: FunctionComponent<FormFieldData> = ({ formField, register, errors }) => {
  return (
    <div className="mb-3">
      <Input name={formField["name"]} type={formField["type"]} register={register} errors={errors} />
      <div className="invalid-feedback">{errors["email"]?.message}</div>
    </div>
  );
};

interface InputData {
  name: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const Input: FunctionComponent<InputData> = ({ name, type, register, errors }) => {
  if (type == "text" || type == "email") {
    return (
      <input
        className={`form-control ${errors["email"] ? 'is-invalid' : ''}`}
        id={name}
        type={type}
        placeholder={name}
        {...register(name)}
      />
    );
  } else if (type == "textArea") {
    return (
      <textarea
        className="form-control"
        id={name}
        placeholder={name}
        style={{ height: "10rem" }}
      />
    );
  } else {
    return null;
  }
};

export default ContactForm;
