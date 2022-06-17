import React, { useState, FunctionComponent } from "react";
import * as R from "ramda";

export type FAQData = {
  header: string;
  FAQs: ReadonlyArray<FAQBulletData>;
};

const FAQ: FunctionComponent<FAQData> = ({ header, FAQs }) => {
  return (
    <div className="container-fluid pt-5 px-4">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col">
          <div className="row">
            <p className="header text float-start text-dark fs-4">{header}</p>
          </div>
          {R.map(renderFaqBullet, FAQs)}
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
            <p className="text text-dark float-start pt-3"> {question} </p>
          </div>
          <div className={"col-2"}>
            <p className="text text-primary float-end fw-bold fs-1">+</p>
          </div>
        </div>
      </button>
      <div className={"row"}>
        <p className="text ps-3"> {clickedButton ? answer : ""} </p>
      </div>

      <div className={"row ps-3"}>
        <hr className={""} />
      </div>
    </div>
  );
};

export default FAQ;
