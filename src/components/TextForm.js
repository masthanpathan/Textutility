import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //setText('newTextUpdated')

  const upClick = () => {
    //console.log("upClick button is clicked" +text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convertd to Uppercase", "success")
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const loClick = () => {
    // console.log("upClick button is clicked" +text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convertd to Lowercase", "success")
  };

  const handleOnChange = (event) => {
    console.log("Text has Changed");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "black" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>

        <div className="container mb-3">
          <textarea
            className="form-control" value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "light" : "dark", color: props.mode === "black" ? "white" : "black"
            }}
            placeholder="Enter your text here"
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick={upClick}>
          To Upper
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={loClick}>
          To Lower
        </button>
        <button className="btn btn-primary mx-3 ml\y-3" onClick={clearText}>
          clear
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary is :</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
