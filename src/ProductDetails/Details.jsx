import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";
import "./Details.css";

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [notification, setNotification] = useState(false);

    const product = useSelector((state) =>
        state.products.items.find((item) => item.id === parseInt(id))
    );
    const status = useSelector((state) => state.products.status);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        if (!product && status === "idle") {
            dispatch(fetchProducts());
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
        setNotification(true);

        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    if (status === "loading") {
        return <p>Loading product details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="product-details">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
                <h2>{product.title}</h2>
                <div className="ratings">
                    <p>★★★★☆</p>
                    <p
                        style={{
                            color: "blue",
                            fontSize: "12px",
                            fontWeight: "bold",
                            marginLeft: "15px",
                            marginTop: "16px",
                        }}
                    >
                        2530 Ratings | 324 Answered Questions
                    </p>
                </div>
                <p className="brand">Brand: {product.brand || "No Brand"}</p>
                <div>
                    <span className="price">$ {product.price}</span>
                    <span className="discount">$ 400</span>
                    <span className="save">-80%</span>
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>

                {notification && (
                    <div className="notification">
                        Item added to cart successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;