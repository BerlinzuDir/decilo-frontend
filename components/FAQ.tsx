import React, { useState, FunctionComponent } from "react";

export interface FAQData {
  header: string,
  FAQs: Array<Record<string, string>>
}

const FAQ: FunctionComponent<FAQData> = ({ header, FAQs }) => {
  return (
    <div className='container-fluid pt-5'>
      <div className="row">
        <div className="col-lg-1">
        </div>
        <div className="col">
          <div className="row">
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
  faq: Record<string, string>
}

const FAQBullet: FunctionComponent<FAQBulletData> = ({ faq }) => {
  const [clickedButton, setClickedButton] = useState(false);
  const buttonHandler = (event: any) => {
    clickedButton ? setClickedButton(false) : setClickedButton(true)
  }
  return (
    <div className="row">
      <button className="btn" name="button1" type="button" onClick={buttonHandler}>
        <p className='text text-dark float-start'> {faq["question"]} </p> <p className='text text-primary float-end fw-bold fs-1'>+</p>
      </button>
      <p className="text ps-3"> {clickedButton ? faq["answer"] : ""} </p>
      <div className="hr"></div>
    </div>
  )
}

export default FAQ;
