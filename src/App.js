import React from "react";
import Navbar from "./components/top-navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Laptops from "./components/Laptops";
import Page from "./components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuList from "./components/MenuList";
import Mobile from "./components/Mobile";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
