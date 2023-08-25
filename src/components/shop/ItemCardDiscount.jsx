import React, {useContext, useState} from 'react';
import { reduceTo20Words, reduceTo5Words } from "../utils/Utils.jsx";
import { PriceContext } from '../context/PriceProvider.jsx';

function ItemCardDiscount({title, itemPrice, newPrice, description, image}) {

    const {price, updatePrice } = useContext(PriceContext);

    const handlePriceUpdate = () => {
        const addToTotal = Math.floor(newPrice * quantity, 4);
        updatePrice(price + addToTotal);
        setQuantity(1);
    };

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const newTitle = reduceTo5Words(title);
    const newDescription = reduceTo20Words(description);
    
    return (
        <div className="card-container bg-white w-96 flex flex-col items-center justify-center p-4 shadow-md rounded-md gap-2">
            <img src={image} alt="ITEM" className='h-44'/>
            <h4 className="text-lg font-semibold">{newTitle}</h4>
            <p className="text-sm">{newDescription}</p>
            <div className='flex items-center gap-7'>
                <p className='text-sm opacity-40 line-through'>${itemPrice}</p>
                <p className='text-xl text-red-500'>${newPrice}</p>
            </div>
            <div className='flex items-baseline justify-center gap-5'>
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
                <button className="mt-2 bg-yellow-600 bg-opacity-75 text-white py-1 px-4 rounded-md" onClick={handlePriceUpdate}>Add</button>
            </div>
        </div>
    );
}

export default ItemCardDiscount;