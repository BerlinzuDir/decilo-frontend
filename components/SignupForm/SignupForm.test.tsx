import React from "react";
import { shallow } from "enzyme";
import SignupForm from "./index";

describe("Index", () => {
  it("should render a form with the required fields", () => {
    const wrapper = shallow(<SignupForm {...signupFormProps} />);
    expect(wrapper.find("form")).toHaveLength(1);

    expect(wrapper.find("input[name='firstName']")).toHaveLength(1);
    expect(wrapper.find("input[name='lastName']")).toHaveLength(1);
    expect(wrapper.find("input[name='email']")).toHaveLength(1);
    expect(wrapper.find("input[name='password']")).toHaveLength(1);
    expect(wrapper.find("input[name='acceptTerms']")).toHaveLength(1);

    // has a submit button of type btn-primary with the text "Sign Up"
    expect(wrapper.find("button[type='submit']")).toHaveLength(1);
    expect(wrapper.find("button[type='submit']").props().className).toContain(
      "btn-primary"
    );
    expect(wrapper.find("button[type='submit']").text()).toEqual("Sign Up");

    // has a header that says "Signup"
    expect(wrapper.find("h5").text()).toEqual("Sign Up");
  });

  it("should send the form data to the onSubmit function when the form is submitted", async () => {
    const onSubmit = jest.fn(() => Promise.resolve(200));

    // render component with onSubmit function
    const wrapper = shallow(
      <SignupForm {...signupFormProps} onSubmit={onSubmit} />
    );

    // fill form with data
    wrapper.find("input[name='firstName']").simulate("change", {
      target: { name: "firstName", value: "John" },
    });
    wrapper.find("input[name='lastName']").simulate("change", {
      target: { name: "lastName", value: "Doe" },
    });
    wrapper.find("input[name='email']").simulate("change", {
      target: { name: "email", value: "john.doe@gmail.com" },
    });
    wrapper.find("input[name='password']").simulate("change", {
      target: { name: "password", value: "password" },
    });
    wrapper.find("input[name='acceptTerms']").simulate("change", {
      target: { name: "acceptTerms", value: true },
    });

    // submit form
    await wrapper.find("form").simulate("submit");

    // wait for onSubmit to be called
    await new Promise(process.nextTick);

    // check if onSubmit was called with the form data
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@gmail.com",
      password: "password",
      acceptTerms: true,
    });
  });
});

describe("useLanguageHook", () => {});

const signupFormProps = {
  header: "Sign Up",
  fieldDescriptions: {
    email: {
      name: "email",
      label: "Email",
      required: true,
      invalidMsg: "Invalid email",
    },
    firstName: {
      name: "firstName",
      label: "First name",
      required: true,
    },
    lastName: {
      name: "lastName",
      label: "Last name",
      required: true,
    },
    password: {
      name: "password",
      label: "Password",
      required: true,
      invalidMsg: "Invalid password",
    },
    acceptTerms: {
      name: "acceptTerms",
      label: "Accept terms",
      required: true,
    },
  },
  onSubmit: () => {},
};
