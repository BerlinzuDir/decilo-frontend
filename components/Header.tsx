import React from "react";

export default function Header({ content, setLanguage }) {
  function setLanguageToDE() {
    setLanguage("DE");
  }

  function setLanguageToEN() {
    setLanguage("EN");
  }

  return (
    <div className="container">
      <nav className="navbar bg-transparent navbar-expand fixed-top">
        <div className="container-fluid">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a
                type="button"
                className="btn pe-0 text-secondary"
                onClick={setLanguageToDE}
              >
                {content["Header"]["buttonDE"]}
              </a>
            </li>
            <li className="ps-1 pe-1 pt-2 text-secondary">|</li>
            <li className="nav-item active">
              <a
                type="button"
                className="btn ps-0 text-secondary"
                onClick={setLanguageToEN}
              >
                {content["Header"]["buttonEN"]}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
