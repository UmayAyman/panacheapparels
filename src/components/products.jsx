import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            });
    }, [dispatch]);

    const handleClick = (id) => {
        console.log("Product clicked, ID:", id);
    };

    return (
        <div>
        <h1>NEW ARRIVALS UPTO 50% OFF</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id}  className="product" onClick={() => handleClick(product.id)}>
                        <img src={product.image} alt={product.title} width={100} />
                        <h3>{product.title && product.title.toUpperCase()}</h3>
                        <p>$ {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
