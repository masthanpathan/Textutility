import { useState } from "react";
import "./App.css";
// import About from './components/About'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#055160";
      showAlert("Dark mode has been enabled", "success");
      document.title = "DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "LightMode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/" element={<div><TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode} /></div>}/>
            <Route path="/about" element={<div><About /></div>}/>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;


// <Router>
     //   <Navbar mode={mode} toggleMode={toggleMode} />
      //  <Alert alert={alert} />
      //  <div className="container my-3">
      //    <Routes>
      //      <Route path="/about">
       //       <About />
       //     </Route>
       //     <Route path="/">
       //       <TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode}/>
    //        </Route>
    // </Routes>