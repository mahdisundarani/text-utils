// command for creating react app is : npx create-react-app (appname)
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert('Dark mode has been Enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert('light mode has been Enabled', 'success')
    }
  }
  return (
    <>
<Router>
  <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} about = "about us"/>
  <Alert alert={alert}/>
  <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text to analyze"  mode={mode}/>}/>
      </Routes>
  </div>
</Router>     
    </>
  );
}


export default App;
