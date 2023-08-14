import React from 'react';
import { getProducts } from './api'; // Import the API functions

const ProductList = () => {
    const products = getProducts(); // Get products from the API

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
