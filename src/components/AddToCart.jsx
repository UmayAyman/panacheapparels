import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; //useNavigate
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/cartSlice";

const AddToCart = ({ product, notify }) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const user = useSelector((state) => state.auth);

    const handleAddToCart = () => {
    //     if (!user.isLoggedIn) {
    //         toast.error('You must be logged in to add items to the cart.');
    //         navigate("/user");
    //         return;
    //     }
        console.log('Adding to cart:', product);
        dispatch(addToCart(product));
        toast.success(`${product.title} added to cart!`);
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
