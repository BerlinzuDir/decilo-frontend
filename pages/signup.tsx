import React, { FunctionComponent } from "react";
import SignupForm, { SignupFormData } from "../components/SignupForm";
import LayoutWithHero, { LayoutContent } from "../components/LayoutWithHero";

import content from "../content/content.json";
import { useLanguage } from "../hooks/useLanguage";

interface SignupProps extends LayoutContent {
  header: string;
  fieldDescriptions: SignupFormData;
}

const Contact: FunctionComponent = () => {
  const [language, setLanguage] = useLanguage();
  const localizedContent = content[language];
  return (
    <LayoutWithHero
      setLanguage={setLanguage}
      language={language}
      content={localizedContent}
    >
      <SignupForm
        {...localizedContent.signupForm}
        onSubmit={(x: any) => null}
      />
    </LayoutWithHero>
  );
};

export default Contact;
