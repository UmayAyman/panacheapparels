import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                const filteredProducts = response.data.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setProducts(filteredProducts);
            } catch (err) {
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [searchQuery]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="search-results">
            {products.length === 0 ? (
                <div>No products found</div>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <h3 style = {{fontWeight: "bold", textTransform: "uppercase"}}>{product.title}</h3>
                        <p style = {{color: "black", textAlign: "left", fontWeight: "lighter", fontSize: "12px"}}>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchResults;
