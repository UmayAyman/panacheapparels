import React from 'react';
import { useSelector } from 'react-redux';
import AddToCart from './AddToCart';

const ProductList = () => {
    const { items, status } = useSelector((state) => state.products);

    if (status === 'loading') return <p>Loading products...</p>;
    if (status === 'failed') return <p>Failed to load products.</p>;

    return (
        <div className="product-list">
            {items.map((product) => (
                <AddToCart key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;