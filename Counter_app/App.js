import React, { useState } from "react";  
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/body";
import "bootstrap/dist/css/bootstrap.min.css";

const Applayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => { setDarkMode(!darkMode) 
    console.log("Toggle mode:", darkMode);
    document.getElementById("darkModeToggle").textContent = darkMode ? "Light mode" : "Dark mode";
  };  
  return (
    <div className={`min-vh-100 ${darkMode ? "bg-light" : "bg-dark"}`}>
      <Header toggleMode={toggleMode} isDarkMode={darkMode} />
      <Body toggleMode={toggleMode} isDarkMode={darkMode} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
