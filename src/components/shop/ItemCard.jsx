import React from 'react';
import AddItemComponent from './AddItemToggle.jsx';
import testImage from './hero.png';

function ItemCard() {
    return (
        <div className="card-container bg-white w-96 flex flex-col items-center justify-center p-4 shadow-md rounded-md gap-2">
            <img src={testImage} alt="ITEM" className='w-44 h-44'/>
            <h4 className="text-lg font-semibold">ITEM 1</h4>
            <p className="text-sm">Item's Description</p>
            <p className='text-sm'>$0.00</p>
            <div className='flex items-baseline justify-center gap-5'>
                <AddItemComponent />
                <button className="mt-2 bg-purple-500 bg-opacity-75 text-white py-1 px-4 rounded-md">Add</button>
            </div>
        </div>
    );
}

export default ItemCard;
