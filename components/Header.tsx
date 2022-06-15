import React, { FunctionComponent } from "react";

export interface HeaderData {
  buttonDE: string;
  buttonEN: string;
}

interface HeaderProps {
  buttonDE: string;
  buttonEN: string;
  setLanguage: CallableFunction;
}

const Header: FunctionComponent<HeaderProps> = ({
  buttonDE,
  buttonEN,
  setLanguage,
}) => {
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
                className="btn pe-0 text-white"
                onClick={setLanguageToDE}
              >
                {buttonDE}
              </a>
            </li>
            <li className="ps-1 pe-1 pt-2 text-white">|</li>
            <li className="nav-item active">
              <a
                type="button"
                className="btn ps-0 text-white"
                onClick={setLanguageToEN}
              >
                {buttonEN}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
