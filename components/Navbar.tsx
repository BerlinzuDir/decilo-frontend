import React, { FunctionComponent, SyntheticEvent } from "react";
import { useRouter } from "next/router";
import Login from "./Login";

import { Language } from "../hooks/useLanguage";

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
    await router.push(`/contact?state=${language}#Heading`);
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
              <a
                type="button"
                className="btn pe-1 text-white fw-bold"
                onClick={contactAction}
              >
                {contactButton}
              </a>
            </li>
            <li className="nav-item active">
              <a
                type="button"
                className={
                  language === "DE"
                    ? "btn pe-1 text-white fw-bold"
                    : "btn pe-1 pe-1 text-white"
                }
                onClick={setLanguageToDE}
              >
                {buttonDE}
              </a>
            </li>
            <li className="pt-1 text-white">|</li>
            <li className="nav-item active">
              <a
                type="button"
                className={
                  language === "EN"
                    ? "btn ps-1 pe-2 text-white fw-bold"
                    : "btn ps-1 pe-2 text-white"
                }
                onClick={setLanguageToEN}
              >
                {buttonEN}
              </a>
            </li>

            <li className="nav-item ps-1 active">
              <Login />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
