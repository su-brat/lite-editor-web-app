import "./App.css";
import NavBar from "./Navbar";
import Textbox from "./Textbox";
import Alert from "./Alert";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);
  const flashAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const themeContrast = theme === "light" ? "dark" : "light";
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("bg-dark");
      document.body.classList.add("text-light");
      document.getElementById("brand-image").src = "favicon-white-32x32.png";
    } else {
      setTheme("light");
      document.body.classList.remove("bg-dark");
      document.body.classList.remove("text-light");
      document.getElementById("brand-image").src = "favicon-32x32.png";
    }
  }
  return (
    <div className="App">
      <NavBar
        theme={theme}
        toggleTheme={toggleTheme}
        themeContrast={themeContrast}
        setAlertMessage={flashAlert}
      />
      <Alert msg={alert} />
      <div className="container">
        <Textbox />
      </div>
    </div>
  );
}

export default App;
