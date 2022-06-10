import React, { useState, FunctionComponent } from "react";

export interface faqData {

}

const FAQ: FunctionComponent<faqData> = () => {
  var array:string[] = []
  const [clickedButton, setClickedButton] = useState(array);

  const buttonHandler = (event: any) => {
    event.preventDefault();
    console.log(clickedButton)
    console.log(clickedButton.indexOf("button1"))
    console.log(clickedButton.indexOf("button1") > -1)
    if (clickedButton.indexOf(event.currentTarget.name) > -1 ) {
      clickedButton.forEach((element, index)=>{
        if(element==event.currentTarget.name) delete clickedButton[index];
     });
    }
    else {
      clickedButton.push(event.currentTarget.name)
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
            <p className="text"> {clickedButton.indexOf("button1") > -1 ? "This is the text" : ""} </p>
          </div>
          <div className="row">
            <button className="btn" name="button2" type="button" onClick={buttonHandler}>
              <p className='text text-dark ps-3 float-start fs-5'> blablabla?</p> <p className='float-end text-primary fw-bold fs-1'>+</p>
            </button>
            <p className="text"> {clickedButton.indexOf("button2") > -1  ? `This is the text"` : ""} </p>
          </div>
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}

export default FAQ;
