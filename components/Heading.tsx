import React, { FunctionComponent } from "react";

export interface HeadingData {
  heading: string;
  subHeading: string;
}

const Heading: FunctionComponent<HeadingData> = ({ heading, subHeading }) => {
  return (
    <div className="col pt-5  align-self-center">
      <h4 className="pb-0 m-0 text-dark fw-bold">{heading}</h4>
      <h5 className="pt-0 m-0 text-uppercase text-primary fw-bold">
        {subHeading}
      </h5>
    </div>
  );
};

export default Heading;
