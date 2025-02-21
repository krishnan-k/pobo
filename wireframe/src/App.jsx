import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes } from "react-router";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-script">
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
