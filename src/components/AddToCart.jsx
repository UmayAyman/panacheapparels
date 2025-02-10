import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/cartSlice";

const AddToCart = ({ product }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

        useEffect(() => {
            if (!product && status === "idle") {
                dispatch(fetchProducts());
                toast.success(`${product.title} added to cart!`);
            }
        }, [dispatch, product, status]);

        const handleAddToCart = () => {
            console.log("isLoggedIn:", isLoggedIn);
            if (!isLoggedIn) {
                alert("You must be logged in to add items to the cart.");
                navigate("/user");
                return;
            }
    
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
            setNotification(true);
    
            setTimeout(() => {
                setNotification(false);
            }, 3000);
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
