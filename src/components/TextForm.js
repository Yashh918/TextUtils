import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleCopyClick = () => {
        let copy = document.getElementById("myBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handle onChange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const letterCount = text.length;

    const containerStyle = {
        color: props.mode === 'dark' ? 'white' : 'black'
    }
    const container2Style = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(0 5 17)' : 'white',
    }

    return (
        <>
            <div className="container" style={containerStyle}>
                <h4>{props.heading}</h4>
                <div className="mb-3">
                    <textarea
                        className="container2 form-control"
                        value={text} onChange={handleOnChange}
                        placeholder='Enter your text'
                        id="myBox"
                        rows="12"
                        style={container2Style} />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra spaces</button>
            </div>
            <div className="container my-3" style={containerStyle}>
                <h4>
                    Your text summary
                </h4>
                <p>
                    {wordCount} words and {letterCount} characters <br />
                    {0.008 * wordCount} minutes read
                </p>
                <h4>
                    Preview
                </h4>
                <p>
                    {text.length > 0 ? text : 'Enter your text to preview here'}
                </p>
            </div>
        </>
    )
}