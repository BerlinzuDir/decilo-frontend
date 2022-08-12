import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import SignupForm from "./index";

export default {
  title: "Index",
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args) => (
  <SignupForm {...args} />
);

export const Default = Template.bind({});

Default.args = {
  header: "Sign up",
  formDescription: {
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
};
