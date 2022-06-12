import React, { useState, FunctionComponent } from "react";
import { TRUE } from "sass";

export interface FAQData {

}

const FAQ: FunctionComponent<FAQData> = ({ header, FAQs }) => {
  const [clickedButton1, setClickedButton1] = useState(false);
  const [clickedButton2, setClickedButton2] = useState(false);


  const buttonHandler = (event: any) => {
    if (event.currentTarget.name === "button1") {
      { clickedButton1 ? setClickedButton1(false) : setClickedButton1(true) }
    }
    else if (event.currentTarget.name === "button2") {
      { clickedButton2 ? setClickedButton2(false) : setClickedButton2(true) }
    }
  };

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
          <div className="row">
            <button className="btn btn-primary-outline" name="button1" type="button" onClick={buttonHandler}>
              <p className='text text-dark ps-3 float-start fs-5'> Wie kann ich mich beteiligen?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
            </button>
            <p className="text"> {clickedButton1 ? "This is the text" : ""} </p>
          </div>
          <div className="row">
            <button className="btn" name="button2" type="button" onClick={buttonHandler}>
              <p className='text text-dark ps-3 float-start fs-5'> blablabla?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
            </button>
            <p className="text"> {clickedButton2 ? `This is the text"` : ""} </p>
          </div>
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}

interface faqBulletData {

}

const faqBullet: FunctionComponent<faqBulletData> = () => {
  const [clickedButton, setClickedButton] = useState(false);
  const buttonHandler = (event: any) => { clickedButton ? setClickedButton(false) : setClickedButton(true) }
  return (
    <div className="row">
      <button className="btn btn-primary-outline" name="button1" type="button" onClick={buttonHandler}>
        <p className='text text-dark ps-3 float-start fs-5'> Wie kann ich mich beteiligen?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
      </button>
      <p className="text"> {clickedButton ? "This is the text" : ""} </p>
    </div>
  );
};

export default FAQ;
