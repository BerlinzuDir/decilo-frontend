import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

type FormFieldDescription = {
  name: string;
  label: string;
  invalidMsg?: string;
  required?: boolean;
};

type SignupFormFieldsDescription = {
  firstName: FormFieldDescription;
  lastName: FormFieldDescription;
  email: FormFieldDescription;
  password: FormFieldDescription;
  acceptTerms: FormFieldDescription;
};

type SignupFormProps = {
  header: string;
  fieldDescriptions: SignupFormFieldsDescription;
  onSubmit: (data: any) => void;
};

export type SignupFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: boolean;
};

const SignupForm: FunctionComponent<SignupFormProps> = ({
  header,
  fieldDescriptions: { firstName, lastName, email, password, acceptTerms },
  onSubmit,
}) => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  return (
    <div className="col-sm py-5 align-self-center pe-4">
      <h5 className="text-dark py-2">{header}</h5>
      <div className="card-background rounded">
        <div className="card-body bg-light p-4">
          <form
            name="signup-form"
            method="POST"
            onSubmit={handleSubmit((data) => onSubmit(data))}
          >
            <div className="row mt-2">
              <div className="col-lg-6">
                <input
                  type="text"
                  {...register("firstName")}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  placeholder={firstName.label}
                />
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              </div>
              <div className="col-lg-6  mt-lg-0 mt-3">
                <input
                  type="text"
                  {...register("lastName")}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  placeholder={lastName.label}
                />
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              </div>
            </div>
            <div className="row mt-lg-3">
              <div className="col-lg-6  mt-lg-0 mt-3">
                <input
                  type="text"
                  {...register("email")}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder={email.label}
                />
              </div>
              <div className="col-lg-6    mt-lg-0 mt-3">
                <input
                  type="text"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder={password.label}
                />
              </div>
            </div>
            <div className="form-group form-check my-3">
              <input
                type="checkbox"
                {...register(acceptTerms.name)}
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
                  href="components/ContactForm/ContactForm#index.tsx"
                  className="link-secondary"
                >
                  {acceptTerms.label}{" "}
                </a>
              </label>
              <div className="invalid-feedback">
                {errors.acceptTerms?.message}
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-submit btn-primary text-primary mr-1 pe-4 ps-4"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
