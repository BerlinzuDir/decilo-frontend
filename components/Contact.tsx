import React, { FunctionComponent } from "react";


export interface ContactData { }

const Contact: FunctionComponent<ContactData> = () => {
    return (
        <div className="container-fluid ps-4 pe-4 pt-4 pb-4">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col rounded-3 decilo-background">
                    <div className="container-fluid background-logo">
                        <p className="text text-white pt-4 text-uppercase">Möchten sie Mehr Informationen zur decilo Plattformn? <br /> Wir beantworten gerne ihre Fragen.</p>
                        <div className="text-center pb-4">
                            <button type="button" className="btn btn-default text-white fw-bold">Kontakt Aufnehmen</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};

export default Contact;
