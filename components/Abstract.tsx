import React, { FunctionComponent } from "react";

export interface AbstractData {
  abstractText: string;
}

const Abstract: FunctionComponent<AbstractData> = ({ abstractText }) => {
  return (
    <div className="container-fluid pt-5 ps-3">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col align-self-center">
          <p className="text-dark">{abstractText}</p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Abstract;
