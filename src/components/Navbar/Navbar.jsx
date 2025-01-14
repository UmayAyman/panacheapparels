import React from "react";
import { BsClipboard } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
                <i className="search-icon" style = {{marginTop: "50px"}}><CiSearch /></i>
            <div className="navbar-section" style = {{marginLeft: "-100px"}}>
                <label>NEW IN</label>
                <select style={{ width: "18px" }} name="navbar">
                    <option value="winter">Winter Whisper</option>
                    <option value="Fest">ELEGANCE FEST PRET</option>
                </select>
            </div>
            <div className="navbar-section" style = {{marginTop: "30px", marginLeft: "-100px"}}>
                <label>WINTER EDIT</label>
                <select style={{ width: "18px" }} name="navbar">
                    <option value="winter">Velvet Edit</option>
                    <option value="Fest">Winter Basics</option>
                    <option value="Fest">Crape De Luxe</option>
                    <option value="Fest">Velvet Shawls</option>
                </select>
            </div>
            <div className="un-stitched" style = {{marginLeft: "-370px", marginTop: "100px" }}>
                <label>UNSTITCHED</label>
            </div>

            <div className="logo">
                <h1 style = {{marginRight: "-500px"}}>Panache Apparels</h1>
            </div>

            <div className="logo">
                <p style = {{marginRight: "-830px"}}>HOT SELLERS</p>
            </div>

            <div className="logo">
                <p style = {{marginRight: "-750px"}}>SALE</p>
            </div>

            <div className="logo">
                <p style = {{marginRight: "-600px"}}>KIDS</p>
            </div>


            <div className="navbar-section" style = {{marginTop: "90px", marginRight: "-100px"}}>
                <label>ALL COLLECTIONS</label>
                <select style={{ width: "18px" }} name="navbar">
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
                <i className="user-icon" style = {{marginTop: "50px"}}><SlUser /></i>
                <i className="cart-icon" style = {{marginTop: "50px"}}><BsClipboard /></i>
            </div>
        </div>
    );
};

export default Navbar;
