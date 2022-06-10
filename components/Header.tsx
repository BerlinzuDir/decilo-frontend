import React from 'react'

export default function Header({ content, setLanguage }) {
    function setLanguageToDE() {
        setLanguage("DE")
    }

    function setLanguageToEN() {
        setLanguage("EN")
    }

    return (
        <div className='container'>
            <nav className="navbar bg-transparent navbar-expand fixed-top">
                <div className="container-fluid">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a type="button" className="btn pe-0 text-white" onClick={setLanguageToDE}>
                                    {content["buttonDE"]}
                                </a>
                            </li>
                            <li className='ps-1 pe-1 pt-2 text-white'>|</li>
                            <li className="nav-item active">
                                <a type="button" className="btn ps-0 text-white" onClick={setLanguageToEN}>
                                    {content["buttonEN"]}
                                </a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>
    )
}
