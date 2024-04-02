import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
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
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    const handleOnChange = (event) => {
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
        backgroundColor: props.mode === 'dark' ? 'rgb(0 5 17)' : 'white'
    }

    return (
        <>
            <div className="container py-5" style={containerStyle}>
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
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopyClick}>Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Extra spaces</button>
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