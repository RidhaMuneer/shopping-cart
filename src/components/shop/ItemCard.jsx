import React from 'react';
import AddItemComponent from './AddItemToggle.jsx';
import { reduceTo20Words, reduceTo5Words } from "../utils/Utils.jsx";

function ItemCard({title, price, description, image}) {

    const newTitle = reduceTo5Words(title);
    const newDescription = reduceTo20Words(description);
    
    return (
        <div className="card-container bg-white w-96 flex flex-col items-center justify-center p-4 shadow-md rounded-md gap-2">
            <img src={image} alt="ITEM" className='h-44'/>
            <h4 className="text-lg font-semibold">{newTitle}</h4>
            <p className="text-sm">{newDescription}</p>
            <p className='text-sm'>${price}</p>
            <div className='flex items-baseline justify-center gap-5'>
                <AddItemComponent />
                <button className="mt-2 bg-yellow-600 bg-opacity-75 text-white py-1 px-4 rounded-md">Add</button>
            </div>
        </div>
    );
}

export default ItemCard;
