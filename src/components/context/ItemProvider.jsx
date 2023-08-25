import React, { useState, createContext} from 'react';

const ItemContext = createContext();

const ItemProvider = ({children}) => {

    const [ items, setItems] = useState([]);

    const updateItems = ( newItem ) => {
        setItems([...items, newItem]);
    }

    return (
        <ItemContext.Provider value={{items, setItems}}>
            {children}
        </ItemContext.Provider>
    );

}

export {ItemProvider, ItemContext};