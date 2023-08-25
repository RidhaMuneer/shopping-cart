import React, { useContext, useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ItemContext } from '../context/ItemProvider';
import { reduceTo5Words } from '../utils/Utils';

import Icon from '@mdi/react';
import { mdiCloseThick } from '@mdi/js';

function ShoppingCart() {

    const { items, setItems } = useContext(ItemContext);

    const [ total, setTotal] = useState(0);

    const calculateTotal = () => {
        let total = 0;
        items.map(item => total += item.newPrice)
        setTotal(total);
    }

    const handleRemove = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }    

    useEffect(() => {
        calculateTotal();
    });

    return (
        <div className="text-black fixed top-28 md:right-72 md:w-2/5 w-4/5 bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <FaShoppingCart className="text-2xl" />
            </div>
            <div>
                {items.map(item => (
                    <div key={item.id} className="flex gap-5 m-5 justify-between items-center">
                        <div className='flex gap-5'>
                            <img src={item.image} alt="item" className='h-16 w-16'/>
                            <div className='flex flex-col gap-1'>
                                <p>{reduceTo5Words(item.title)}</p>
                                <div className='flex gap-10'>
                                    <p>${item.newPrice}</p>
                                    <p>X {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={ () => handleRemove(item.id)}>
                            <Icon path={mdiCloseThick} size={1} />
                        </button>
                    </div>
                ))}
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
                <p className="font-semibold">Total:</p>
                <p>${total}</p>
            </div>
            <button className='rounded-md border px-7 bg-green-600 text-white mt-2 py-3'>Proceed</button>
        </div>
    );
}

export default ShoppingCart;
