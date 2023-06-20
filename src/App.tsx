import React, { useEffect } from "react";
import "./App.css";
import Register from "./components/Register";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
    </div>
  );
}
export default App;
