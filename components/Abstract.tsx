import React, { FunctionComponent } from "react";

export interface AbstractData {
  abstractText: string;
}

const Abstract: FunctionComponent<AbstractData> = ({ abstractText }) => {
  return (
    <div className="col align-self-center pt-5 ">
      <p className="text-dark">{abstractText}</p>
    </div>
  );
};

export default Abstract;
