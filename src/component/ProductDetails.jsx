
import React from 'react';
import { getProductById } from './api'; // Import the API functions

const ProductDetails = ({ match }) => {
    const productId = parseInt(match.params.id); // Get the product ID from the URL
    const product = getProductById(productId); // Get product details from the API

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;