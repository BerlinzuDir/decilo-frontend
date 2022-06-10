import React, { FunctionComponent } from "react";

export interface HeadingData {
  heading: string;
  subHeading: string;
}

const Heading: FunctionComponent<HeadingData> = ({ heading, subHeading }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col align-self-center">
          <h4 className="p-3 pb-0 m-0 text-dark fw-bold">{heading}</h4>
          <h5 className="p-3 pt-0 m-0 text-uppercase text-primary fw-bold">
            {subHeading}
          </h5>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Heading;
