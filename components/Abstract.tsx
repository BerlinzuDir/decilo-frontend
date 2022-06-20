import React, { FunctionComponent } from "react";

export interface AbstractData {
    abstractText: string;
}

const Abstract: FunctionComponent<AbstractData> = ({ abstractText }) => {
    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col align-self-center">
                    <p>{abstractText}</p>

                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    );
};

export default Abstract;
