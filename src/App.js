import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './About';
import React,{useState} from 'react';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  
  Route
} from "react-router-dom"
function App(){

 const [mode,setMode] = useState('light');

 const toggleMode = () =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    
  }
 }


return (
  <>
    <Router>
      <Navbar  mode={mode} title="Text Manipulator" aboutText="About" toggleMode={toggleMode}/>
      {/* <Alert alert="alert !"/> */}
      <div className="container my-3" >
        <Routes>
          {/* <Route path="/abt" element={<About />}/> */}
          <Route path="/" element={<Textform  mode={mode} heading="Enter the text to analyze below"/>}/>
        </Routes>
      </div>
    </Router>  
  </>
);
}

export default App;
