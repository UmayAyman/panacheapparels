import React from "react";
import './App.css';
import Dropdown from "./components/DropDown";
import Header from "./components/header";
import Navbar from './components/Navbar/Navbar';
import Products from './components/products';
import Slideshow from "./components/slideshow";

const App = () => {
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Slideshow />
      <Products />
      <Dropdown />
    </div>
  )
}

export default App;