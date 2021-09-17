import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg,type)=>{
    setAlert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled ","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled ","success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      
        {/* <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/"> */}
              <Textform heading="Enter the text to analyze" mode={mode}  showAlert={showAlert} />
            {/* </Route> */}
        {/* </Switch> */}
        </div>
      {/* </Router> */}
    </> 
  );
}

export default App;
