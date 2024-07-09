import React, { useState } from 'react';

export default function TextForm(props) {

    const ToUpperCase = () => {
        // console.log('Upper button was click');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted in Upper Case!", "Success");
    }

    const ToLowerCase = () => {
        // console.log('Upper button was click');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted in Lower Case!", "Success");
    }

    const Clear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "Success");
    }

    const copyBtn = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!", "Success");
    }

    const ChangeText = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    return (
        <>
            <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} value={text} onChange={ChangeText} id="myBox" rows="6"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={ToUpperCase} id='btn-toUp'>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={ToLowerCase} id='btn-toLo'>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={Clear} id='btn-Clr'>Clear</button>
                <button className='btn btn-primary mx-1' onClick={copyBtn} id='btn-Copy'>Copy</button>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <p>{text.split(' ').length - 1} words {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes need to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text box to preview here..."}</p>
            </div>
        </>
    );
}
