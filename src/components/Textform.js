import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');




const handleupclick = () => {
 
  let newText = text.toUpperCase();
setText(newText);
}

const handletocopy = () =>{
  var text = document.getElementById("idtext");
  text.select();
  navigator.clipboard.writeText(text.value);
}


const handlelowclick = () => {
 
  let newText = text.toLowerCase();
setText(newText);
}
const handlespace = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

const handletoclear = () => {
  let newText = '';
  setText(newText);
}


const handleOnChange = (event) => {
 
 setText(event.target.value);
}


 



  return (
    <>

    <div className="container" style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                
                <textarea className="form-control" value = {text} onChange = {handleOnChange}  style = {{  backgroundColor:props.mode === 'dark' ? 'grey' : 'white' , color :props.mode === 'dark' ? 'white' : 'black'}} id="idtext" rows="8"></textarea>
                </div>



                <button type="button" className="btn btn-primary mx-3" onClick={handleupclick} >Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handlelowclick} >Convert to lowercase</button>
                <button type="button" className="btn btn-primary mx-3" onClick={handletoclear} >Clear Text</button>

                <button type="button" className="btn btn-primary mx-3" onClick={handletocopy} >Copy Text</button>

                <button type="button" className="btn btn-primary" onClick={handlespace} >Remove space</button>

                
    </div>
  
    <div className="container my-3"  style = {{color:props.mode === 'dark' ? 'white' : 'black'}}>
         <h2  >Your text's summary :- </h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <br />
          <p>{0.008 * text.split(" ").length} Minutes read !</p>
          <h2>Previewing Text Below :-</h2>
          <p>{text}</p>
    </div>


    </>
  )
}

