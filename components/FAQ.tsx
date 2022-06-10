import React, { useState } from "react";

export default function FAQ() {
  const [clickedButton, setClickedButton] = useState([]);

  const buttonHandler = (event) => {
    event.preventDefault();

    if (!clickedButton.includes(event.currentTarget.name)) {
      clickedButton.push(event.currentTarget.name)
      setClickedButton(clickedButton)
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
              Erste Antworten
            </p>
          </div>
          <div className="row">
            <button className="btn" name="button1" type="button" onClick={buttonHandler}>
              <p className='text text-dark ps-3 float-start fs-5'> Wie kann ich mich beteiligen?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
            </button>
            <p className="text"> {clickedButton.includes("button1") ? `This is the text"` : ""} </p>
          </div>
          <div className="row">
            <button className="btn" name="button2" type="button" onClick={buttonHandler}>
              <p className='text text-dark ps-3 float-start fs-5'> blablabla?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
            </button>
            <p className="text"> {clickedButton.includes("button1") ? `This is the text"` : ""} </p>
          </div>
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}
