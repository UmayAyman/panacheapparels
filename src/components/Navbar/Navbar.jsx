import React from "react";
import { BsClipboard } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
                <i className="search-icon" ><CiSearch /></i>
            <div className="navbar-section">
                <label>NEW IN</label>
                <select style={{ width: "18px", height: "14px" }} name="navbar">
                    <option value="winter">Winter Whisper</option>
                    <option value="Fest">ELEGANCE FEST PRET</option>
                </select>
            </div>
            <div className="navbar-section" >
                <label>WINTER EDIT</label>
                <select style={{ width: "18px", height: "14px" }} name="navbar">
                    <option value="winter">Velvet Edit</option>
                    <option value="Fest">Winter Basics</option>
                    <option value="Fest">Crape De Luxe</option>
                    <option value="Fest">Velvet Shawls</option>
                </select>
            </div>
            <div className="un-stitched" >
                <label>UNSTITCHED</label>
            </div>

            <div className="logo">
                <h1>Panache Apparels</h1>
            </div>

            <div className="logo1">
                <p>HOT SELLERS</p>
            </div>

            <div className="logo1">
                <p>SALE</p>
            </div>

            <div className="logo1">
                <p>KIDS</p>
            </div>


            <div className="navbar-section">
                <label>ALL COLLECTIONS</label>
                <select style={{ width: "18px", height: "14px" }} name="navbar">
                    <option value="winter">Clara RTW'24</option>
                    <option value="Fest">Daily Essential RTW</option>
                    <option value="Fest">Gardenia</option>
                    <option value="Fest">Floral Fusion</option>
                    <option value="Fest">Lamhey Luxury Lawn</option>
                    <option value="Fest">Kids Edit</option>
                    <option value="Fest">Nova</option>
                </select>
            </div>

            <div className="navbar-section">
                <i className="user-icon"><SlUser /></i>
            <div className="chart-header">
                <Link to="/Cart" className="cart-icon"><BsClipboard /></Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
