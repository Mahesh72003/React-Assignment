import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./src/components/Header";
import Body from "./src/components/body";

function App() {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;