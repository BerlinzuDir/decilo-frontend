import React, {FunctionComponent} from "react";
import Image from 'next/image'
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
        <div className={'container-fluid col-6 col-lg-3 p-4'}>
            <div className={'row'}>
                <div className={'col-3'}>
                    <Image layout={'fixed'} width={40} height={50} src={iconSource}/>
                </div>
                <div className={'col-9 text-end text-break'}>
                    <h6>{heading}</h6>
                </div>
            </div>
            <div className={'row'}>
                <hr/>
            </div>
            <div className={'row'}>
                {text}
            </div>
        </div>
    )
}

const renderBenefit = ({heading, text, iconSource}: BenefitProps) => {
    return <Benefit key={heading} heading={heading} text={text} iconSource={iconSource}/>
}

const Benefits: FunctionComponent<BenefitsData> = ({heading, benefits}) => {
  return (
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col align-self-center">
            <h5 className="p-3 pb-4 m-0 text-dark fw-bold">{heading}</h5>
              <div className={'row'}>
                  {R.map(renderBenefit, benefits)}
              </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
  );
}


export default Benefits