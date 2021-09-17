import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // setText('You have clicked on UpClick');

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase! ","success");
    }
    const handleLowClick = ()=>{
        // setText('You have clicked on LowClick');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase! ","success");
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        navigator.vibrate(200);
        props.showAlert("Text Copied to Clipboard ","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
    return (
        <>
            <div className="container" style = {{color : props.mode==='dark' ? 'white' : 'black'
                }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style = {{backgroundColor : props.mode==='dark' ? 'grey' : 'white',
                color : props.mode==='dark' ? 'white' : 'black'
                } } ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text to clipboard</button>
            </div>
            <div className="container my-3" style = {{color : props.mode==='dark' ? 'white' : 'black'
                }}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{1/125*text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length===0 ? 'Enter something' : text}</p>
            </div>
        </>
    )
}
