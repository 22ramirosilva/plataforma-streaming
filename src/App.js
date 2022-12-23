import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import Popular from "./Componentes/Popular/Popular";
import HeaderOut from "./Componentes/HeaderOut/HeaderOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/header" element={<HeaderOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
