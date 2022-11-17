import React, { useState } from 'react';


export default function TextForm(props) {
   
    const [text, setText] = useState("write your text");

    const upperclick=(e)=>{
        
        let uText=text.toUpperCase()
        setText(uText)
    }
    const lowerclick=(e)=>{
        
        let uText=text.toLowerCase()
        setText(uText)
    }
    const removeclick=(e)=>{
        
        let uText=""
        setText(uText)
    }
    const copyclick=(e)=>{
      let Textarea = document.getElementById("myBox");
      // Textarea.focus();
      Textarea.select();
    
      document.execCommand('copy');  
    }
    // const capclick=(e)=>{
    //     console.log("you pressed upper click"+text);
    //     let uText=text.toUpperCase.charAt(0)
    //     setText(uText)
    // }
    const onchange=(e)=>{
        console.log("event is occer");
        setText(e.target.value)
    }
    return (
    <>
    <div>
        <h1>{props.title}</h1>
      <div className="mb-3">
        
        <textarea className="form-control border border-dark" onChange={onchange} value={text} id="myBox" rows="5"></textarea>
      </div>
      <div class="d-inline-flex p-2 bd-highlight">
      <button type="button" class="btn btn-primary border-dark" onClick={upperclick}>UPPERCASE</button>
<button type="button" class="btn btn-secondary mx-2 border-dark" onClick={lowerclick}>LOWERCASE</button>
{/* <button type="button" class="btn btn-success mx-1" >CAPITALIZE</button> */}
<button type="button" class="btn btn-danger mx-2 border-dark" onClick={removeclick}>REMOVE</button>
<button type="button" class="btn btn-dark mx-2 border-dark" onClick={copyclick}>Copy</button>
      </div>
    </div>
    <div className="container"></div>
      <h1>Your Summary</h1> 
      <p>{text.split(" ").length} <b>Words</b></p>   
      <p>{text.length} <b>CharacterS</b></p>   
    </>
  );
}
