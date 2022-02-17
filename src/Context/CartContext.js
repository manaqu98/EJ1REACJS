import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    const addOn = (details, value) => {
        const item = {quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        setCart(currentState => [...currentState, item]);
    };

    console.log(cart);

    return(
        <CartContext.Provider value={[cart, setCart, addOn]}>{children}</CartContext.Provider>
    );
};