import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCart() {

    const cartItems = [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 },
    ];

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="text-black fixed top-28 md:right-72 md:w-2/5 w-4/5 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <FaShoppingCart className="text-2xl" />
            </div>
            <div>
                {cartItems.map(item => (
                    <div key={item.id} className="flex justify-between mb-2">
                        <p>{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
                <p className="font-semibold">Total:</p>
                <p>${total.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default ShoppingCart;
