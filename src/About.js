import React, { useState }  from 'react'



export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const[btnText, setBtnText] = useState("Enable Dark mode")
    const toggle = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable light Mode")
        }
    }
  return (
    <>
    <div className = "container" style = {myStyle}>
  <h2 className ="my-3">About Us </h2>

<ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
</ul>
<div className="container">
      <button type="button"  onClick={toggle} class="btn btn-primary my-4">Enable dark mode</button>
      </div>
    </div>
   
    </>
  )
}
