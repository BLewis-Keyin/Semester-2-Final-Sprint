import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext'; // Import the context

const Checkout = () => {
    const { cartItems } = useContext(ShoppingCartContext);

    // Calculate the total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h1>Checkout</h1>
            <h2>Cart Total: ${totalPrice}</h2>
            {/* Add checkout form and process */}
        </div>
    );
};

export default Checkout;