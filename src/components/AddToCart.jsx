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
        if (isLoggedIn && location.state?.fromCart) {
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
            navigate(location.pathname, { replace: true });
        }
    }, [isLoggedIn, dispatch, location, navigate, product]);

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            navigate("/user", { state: { fromCart: true, from: location.pathname } });
        } else {
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart!`);
        }
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
