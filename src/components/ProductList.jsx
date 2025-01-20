import React from 'react';
import { useSelector } from 'react-redux';
import AddToCart from './AddToCart';

const ProductList = () => {
    const { items, status } = useSelector((state) => state.products);

    if (status === 'loading') return <p>Loading products...</p>;
    if (status === 'failed') return <p>Failed to load products.</p>;

    return (
        <>
        <div style = {{textAlign: "center", fontWeight: "normal", marginBottom: "-20px"}}>
        <h1>NEW ARRIVALS UPTO 50% OFF</h1>
        </div>
        <div className="product-list">
            {items.map((product) => (
                <AddToCart key={product.id} product={product} />
            ))}
            <button style= {{backgroundColor: "black", color: "white", height: "40px", width: "140px", marginLeft: "532px"}}>VIEW ALL</button>
        </div>
        </>
    );
};

export default ProductList;