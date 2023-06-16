import React,{useState} from 'react'

export default function TextForm (props){

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Uppercase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lowercase", "success");
    }

    const handleRemSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordsCounter = () => {
        if(text==='' || text===' '){
            return 0;
        }
        else{
            return text.split(/\s+/).filter((element)=>{return element.length!==0}).length
        }
    }

    const [text, setText] = useState('');
    
    return (
        <div >
            <div className="container mb-3 my-5">
                <h1>{ props.heading }</h1>
                <textarea className="form-control my-3" value={ text } onChange={ handleOnChange } style={ { backgroundColor: props.mode === 'light' ? 'white' : '#28282B', color: props.mode === 'light' ? 'black' : 'white' }} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button disabled={text.length===0} type="button" className="btn btn-success mx-1 my-1" onClick={ handleUpClick }>Convert to Uppercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={ handleLowClick }>Convert to LowerCase</button>
                <button disabled={text.length===0} type="button" className="btn btn-outline-danger mx-1 my-1" onClick={ handleRemSpace }>Remove Spaces</button>
            </div>
            <div className='container'>
                <h2>Your text summary</h2>
                <p onChange={ wordsCounter }> Your text has { wordsCounter() } Words & { text.length } Characters</p>
                <p>{ 0.008 * (wordsCounter()) } Minutes read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </div>
    )
}
