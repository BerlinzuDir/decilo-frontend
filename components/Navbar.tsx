import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";

import { Language } from "../pages/index"

export interface NavbarData {
  buttonDE: string;
  buttonEN: string;
  contactButton: string;
}

interface NavbarProps {
  buttonDE: string;
  buttonEN: string;
  contactButton: string;
  language: Language;
  setLanguage: CallableFunction;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  buttonDE,
  buttonEN,
  contactButton,
  language,
  setLanguage,
}) => {
  const router = useRouter();
    const contactAction = async (e: SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        await router.push({pathname: "/contact", query: { state: language }});
    };

  function setLanguageToDE() {
    setLanguage("DE");
  }

  function setLanguageToEN() {
    setLanguage("EN");
  }

  return (
    <div className="container-fluid p-0">
      <nav className="navbar bg-transparent navbar-expand sticky-top decilo-background">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a type="button" className="btn pe-0 text-white" onClick={contactAction}>
                {contactButton}
              </a>
            </li>
            <li className="nav-item active">
              <a type="button" className="btn pe-0 text-white" onClick={setLanguageToDE}>
                {buttonDE}
              </a>
            </li>
            <li className="ps-1 pe-1 pt-2 text-white">|</li>
            <li className="nav-item active">
              <a type="button" className="btn ps-0 text-white" onClick={setLanguageToEN}>
                {buttonEN}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
