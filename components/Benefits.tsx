import React, {FunctionComponent} from "react";
import * as R from 'ramda'

type BenefitProps = {
  heading: string
  text: string
  iconSource: string
}

export interface BenefitsData {
  heading: string
  benefits: ReadonlyArray<BenefitProps>
}

const Benefit: FunctionComponent<BenefitProps> = ({heading, text, iconSource}) => {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className={'col-4'}>
                    <img src={iconSource}/>
                </div>
                <div className={'col-8'}>
                    <h6>{heading}</h6>
                </div>
            </div>
            <div className={'row'}>
                {text}
            </div>
        </div>
    )
}

const Benefits: FunctionComponent<BenefitsData> = ({heading, benefits}) => {
  return (
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col align-self-center">
            <h5 className="p-3 pb-0 m-0 text-dark fw-bold">{heading}</h5>
              {R.map(Benefit, benefits)}
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
  );
}


export default Benefits