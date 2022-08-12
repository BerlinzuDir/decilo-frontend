import React, { FunctionComponent } from "react";
import Image from "next/image";
import * as R from "ramda";

type BenefitProps = {
  heading: string;
  text: string;
  iconSource: string;
};

export interface BenefitsData {
  heading: string;
  benefits: ReadonlyArray<BenefitProps>;
}

const Benefit: FunctionComponent<BenefitProps> = ({
  heading,
  text,
  iconSource,
}) => {
  return (
    <div className={"container-fluid col-6 col-lg-3 px-xl-5 pt-4 p-4 pe-3"}>
      <div className={"row align-items-end"} style={{ height: "80px" }}>
        <div className={"col-3 ps-0"}>
          <Image
            layout={"fixed"}
            width={40}
            height={50}
            src={iconSource}
            alt={"Benefits icon"}
          />
        </div>
        <div className={"col-9 text-end text-break text-dark ps-1 pe-0"}>
          <h6 className="benefits-heading">{heading}</h6>
        </div>
      </div>
      <div className={"row"}>
        <hr />
      </div>
      <div className={"row text-dark"}>{text}</div>
    </div>
  );
};

const renderBenefit = ({ heading, text, iconSource }: BenefitProps) => {
  return (
    <Benefit
      key={heading}
      heading={heading}
      text={text}
      iconSource={iconSource}
    />
  );
};

const Benefits: FunctionComponent<BenefitsData> = ({ heading, benefits }) => {
  return (
    <div className="col pt-5 align-self-center">
      <h5 className="m-0 text-dark fw-bold">{heading}</h5>
      <div className={"row"}>{R.map(renderBenefit, benefits)}</div>
    </div>
  );
};

export default Benefits;
