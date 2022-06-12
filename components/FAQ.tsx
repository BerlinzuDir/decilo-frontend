import React, { useState, FunctionComponent } from "react";
import { TRUE } from "sass";
import { StructuredType } from "typescript";

export interface FAQData {

}

const FAQ: FunctionComponent<FAQData> = ({ header, FAQs }) => {
  return (
    <div className='container-fluid pt-5'>
      <div className="row">
        <div className="col-lg-1">
        </div>
        <div className="col">
          <div className="row p-3 pb-3">
            <p className='header text float-start text-dark fs-4'>
              {header}
            </p>
          </div>
          {FAQs.map(faq => (
            <FAQBullet faq={faq} />
          ))}
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}

interface FAQBulletData {
}

const FAQBullet: FunctionComponent<FAQBulletData> = ({faq}) => {
  const [clickedButton, setClickedButton] = useState(false);
  const buttonHandler = (event: any) => {
    clickedButton ? setClickedButton(false) : setClickedButton(true)
  }
  return (
    <div className="row">
      <button className="btn" name="button1" type="button" onClick={buttonHandler}>
        <p className='text text-dark ps-3 float-start fs-5'> {faq["question"]} </p> <p className='float-end text-primary fw-bold fs-1'>+</p>
      </button>
      <p className="text"> {clickedButton ? faq["answer"] : ""} </p>
    </div>
  )
}

export default FAQ;
