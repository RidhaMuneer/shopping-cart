import React from "react";
import ItemCard from "./ItemCard.jsx";
import NavBar from "../nav-bar/nav-bar.jsx";
import fetchData from "../data-fetching/FetchData.js";
import { useState, useEffect } from 'react';

function Shop() {

    const [items, setItems] = useState([]);

    const fetchingData = async () => {
        const response = await fetchData();
        setItems(response);
    }

    useEffect(() => {
        fetchingData();
    } , []);

    return (
        <div className="w-full">
            <NavBar></NavBar>
            <div className="bg-gray-200 flex flex-wrap justify-center gap-10 p-10">
                {items.map((obj) => (
                    <ItemCard key={obj.id} id={obj.id} title={obj.title} description={obj.description} image={obj.image} itemPrice={obj.price}/>
                ))}
            </div>
        </div>
    );
}

export default Shop;
