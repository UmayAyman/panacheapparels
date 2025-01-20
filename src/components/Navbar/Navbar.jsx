import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsClipboard } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
    };

    return (
        <div className="navbar">
        <div className="search-icon">
            <CiSearch onClick={toggleSearchBar} className="search-icon-clickable" />
        </div>
        {isSearchBarVisible && (
                <div className="search-modal">
                    <div className="search-modal-content">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                        <CiSearch className="search-icon-in-bar" />
                        <AiOutlineClose
                            onClick={toggleSearchBar}
                            className="close-icon"
                        />
                    </div>
                </div>
            )}

            <div className="navbar-section">
                <label>NEW IN</label>
                <select style={{ width: "18px", height: "14px" }} name="navbar">
                    <option value="winter">Winter Whisper</option>
                    <option value="Fest">ELEGANCE FEST PRET</option>
                </select>
            </div>
            <div className="navbar-section">
                <label>WINTER EDIT</label>
                <select style={{ width: "18px", height: "14px" }} name="navbar">
                    <option value="winter">Velvet Edit</option>
                    <option value="Fest">Winter Basics</option>
                    <option value="Fest">Crape De Luxe</option>
                    <option value="Fest">Velvet Shawls</option>
                </select>
            </div>
            <div className="un-stitched">
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
                <div className="user-icon">
                    <Link to="/User" className="user-icon">
                        <SlUser />
                    </Link>
                </div>
                <div className="cart-icon">
                    <Link to="/Cart" className="cart-icon">
                        <BsClipboard />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
