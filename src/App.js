import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaContainer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="home-link">
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;
