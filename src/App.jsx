import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from "./Cart/Items";
import Dropdown from "./components/DropDown";
import Header from './components/header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/productList';
import Slideshow from "./components/slideshow";
import { fetchProducts } from './redux/productSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  

  return (
    <>
    <Router>
      <Header />
      <Navbar />
    <Routes>
    <Route path="/" element={
      <>
        <Slideshow />
        <Dropdown />
        <ProductList />
      </>
    }/>
    <Route path="/Cart" element={<Cart />} />
    </Routes>
    </Router>
    </>
  );
};

export default App;