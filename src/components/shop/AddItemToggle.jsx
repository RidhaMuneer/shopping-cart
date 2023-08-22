import React, { useState } from 'react';

const AddItemComponent = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex items-center gap-0 border rounded-md bg-gray-300">
            <button
            onClick={handleDecrease}
            className="rounded-l-md py-1 px-4"
            >
                -
            </button>
            <span className="bg-white px-5 py-1">{quantity}</span>
            <button
            onClick={handleIncrease}
            className="rounded-r-md py-1 px-4"
            >
                +
            </button>
        </div>
    );
};

export default AddItemComponent;
