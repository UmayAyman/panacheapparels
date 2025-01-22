import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/cartSlice";

const AddToCart = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        toast.success("Product added to cart!", {
            position: "top-center",
            autoClose: 3000,
            icon: "🛒",
            theme: "dark",
        });
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
            </Link>
            <div className="sale" style={{ whiteSpace: "nowrap", display: "flex", gap: "10px" }}>
                <p style={{ color: "black", fontWeight: "lighter" }}>from ${product.price}</p>
                <p style={{ color: "red", fontWeight: "lighter" }}>SAVE 20%</p>
            </div>
            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default AddToCart;
