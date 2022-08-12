import React, { FunctionComponent, useState } from "react";
import * as R from "ramda";

export type FAQData = {
  header: string;
  faqs: ReadonlyArray<FAQBulletData>;
};

const FAQ: FunctionComponent<FAQData> = ({ header, faqs }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col">
          <div className="row">
            <p className="header text float-start text-dark fs-4">{header}</p>
          </div>
          {R.map(renderFaqBullet, faqs)}
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

interface FAQBulletData {
  question: string;
  answer: string;
}

const renderFaqBullet = ({ answer, question }: FAQBulletData) => (
  <FAQBullet key={question} question={question} answer={answer} />
);

const FAQBullet: FunctionComponent<FAQBulletData> = ({ question, answer }) => {
  const [clickedButton, setClickedButton] = useState(false);
  const buttonHandler = (event: any) => {
    event.preventDefault();
    clickedButton ? setClickedButton(false) : setClickedButton(true);
  };
  return (
    <div className="row">
      <button
        className="btn faq-btn"
        name="button1"
        type="button"
        onClick={buttonHandler}
      >
        <div className="row">
          <div className={"col-10"}>
            <p className="text text-dark float-start ps-2 pt-3"> {question} </p>
          </div>
          <div className={"col-2"}>
            <p className="text text-primary float-end fw-bold fs-1">+</p>
          </div>
        </div>
      </button>
      <div className={"row"}>
        <p className="text text-dark ps-4"> {clickedButton ? answer : ""} </p>
      </div>

      <div className={"row ps-4"}>
        <hr className={""} />
      </div>
    </div>
  );
};

export default FAQ;
