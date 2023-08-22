import React from "react";
import ItemCard from "./ItemCard.jsx";
import NavBar from "../nav-bar/nav-bar.jsx";
import fetchData from "../data-fetching/FetchData.js";

function Shop() {

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const fetchingData = async () => {
        const response = await fetchData();
        console.log(response);
    }

    fetchingData();

    return (
        <div className="w-full">
            <NavBar />
            <div className="bg-gray-200 flex flex-wrap justify-center gap-10 p-10">
                {items.map((item, index) => (
                    <ItemCard key={index} />
                ))}
            </div>
        </div>
    );
}

export default Shop;
