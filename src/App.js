import React from "react";
import "./App.css";
const app = window.require("electron").remote;
const path = app.require("path");

function App() {
  const dir = path.join(__dirname, "../build/index.html");
  return (
    <div className="App">
      <h1>Electron-React-starter</h1>
      <p>root path: {dir}</p>
    </div>
  );
}

export default App;
