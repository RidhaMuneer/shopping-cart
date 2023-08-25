import React, { createContext, useContext, useState } from 'react';

const PriceContext = createContext();

const PriceProvider = ({ children }) => {
    const [price, setPrice] = useState(0);

    const updatePrice = (newPrice) => {
        setPrice(newPrice);
    };

    return (
        <PriceContext.Provider value={{ price, updatePrice }}>
            {children}
        </PriceContext.Provider>
    );
};

export { PriceProvider, PriceContext };
