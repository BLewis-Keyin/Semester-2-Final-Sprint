import React, { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext'; // Import the context

const ShoppingCart = () => {
    const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}{' '}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;