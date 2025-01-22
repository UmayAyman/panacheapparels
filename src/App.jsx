import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cart from "./Cart/Items";
import Dropdown from "./components/DropDown";
import Footer from './components/Navbar/Footer';
import Header from './components/Navbar/header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList';
import Slideshow from "./components/slideshow";
import ProductDetails from './ProductDetails/Details';
import { fetchProducts } from './redux/productSlice';
import Search from './Search/Searchbar';
import User from './User/Info';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  return (
    <>
    <ToastContainer />
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slideshow />
            <Dropdown />
            <ProductList />
            <Footer />
          </>
        } />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/User" element={<User />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
