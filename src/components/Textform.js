import React, { useState } from 'react'
export default function Textform(props) {
  const handleupclick = () => {
    console.log("upper case was click" + text)
    let newText = text.toUpperCase()
    settext(newText)
    props.showalert("convert to uppercase", "success")
  }
  const handleloclick = () => {
    console.log("ulower case was click" + text)
    let newText = text.toLocaleLowerCase()
    settext(newText)
    props.showalert("convert to lowercase", "success")
  }
  const handleonchange = (event) => {
    console.log("on chaange")
    settext(event.target.value)
  }
  const handlecleartext = () => {
    console.log("clear text")
    let newText = ' ';
    settext(newText)
    props.showalert("clear text", "success")
  }


const handlecopy = () => {
  console.log("copy text")
  var text = document.getElementById("My Box");
  text.select();
  // text.setSelectionRange(0,9999)
  navigator.clipboard.writeText(text.value)
  props.showalert("text copied", "success")
}

const handleextraspaces = () => {
  console.log("copy text")
  let newText = text.split(/[ ]+/);
  settext(newText.join(" "))
  props.showalert("removed extra spaces", "success")
}
const [text, settext] = useState(' ')
return (
  <>
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#071c3b' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="My Box" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleonchange} style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode ==='dark' ? 'white' : '#071c3b' }} id="My Box" rows="10"></textarea>
      </div>
      {/* <button className="btn btn primary"> convert to uppercase</button> */}
      <button className="btn btn-primary mx-3" onClick={handleupclick}>conver to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleloclick}>conver to lowercase </button>
      <button className="btn btn-primary mx-3" onClick={handlecleartext}>clear text </button>
      <button className="btn btn-primary mx-3" onClick={handlecopy}>copy text </button>
      <button className="btn btn-primary mx-3" onClick={handleextraspaces}>remove extra spaces </button>
    </div>
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#071c3b' }}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length}Minutes needed</p>
      <h2>Preview</h2>
      <p>{text.length < 0 ? text : 'enter text to preview here'}</p>
    </div>
  </>

)
 }
