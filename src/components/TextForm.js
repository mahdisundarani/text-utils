import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to Upper case!', 'success')
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lower case!', 'success')
  };

  const handleCopy = () => {
   const text = document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);
   props.showAlert('Text Coplied to clipboard', 'success')
  };
  
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Removed space', 'success')
  };

  const handleClearClick = () => {
    const newText = '';
    setText(newText);
    props.showAlert('Cleared text', 'success')
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode  === 'dark' ? 'white':'#042743'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color:props.mode === 'dark' ? 'white':'#042743'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove space</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text to preview it"}</p>
      </div>
    </>
  );
}
