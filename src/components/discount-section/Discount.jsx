import { fetch3Items } from "../data-fetching/FetchData.js";
import { useState, useEffect } from 'react';
import ItemCardDiscount from "../shop/ItemCardDiscount.jsx";

function Discount(){

    const discount = 0.9;
    const [items, setItems] = useState([]);

    const fetchingData = async () => {
        const response = await fetch3Items();
        setItems(response);
    }

    useEffect(() => {
        fetchingData();
    } , []);

    return (
        <div className="bg-yellow-600 bg-opacity-75 flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-10">Just For You</h1>
            <div className="flex items-center justify-baseline pt-5 gap-1">
                <p className="text-lg">%10 DISCOUNT</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 p-10 w-full">
                {items.map((obj) => (
                    <ItemCardDiscount key={obj.id} title={obj.title} description={obj.description} image={obj.image} itemPrice={obj.price} newPrice={Math.floor(obj.price * discount, 2)}/>
                ))}
            </div>
        </div>
    );
}

export default Discount;