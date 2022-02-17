import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    const addOn = (details, value) => { 
        const item = {id: details.id, quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        setCart(currentState => [...currentState, item]);
    };
    
    /*const addOn = (details, value) => { 
        const item = {id: details.id, quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        setCart(currentState => cart.map(currentState => (currentState.id === details.id ? null : [...currentState, item])));
    }; -----> Intento con parametro de que no agregue repetidos*/

    console.log(cart);

    return(
        <CartContext.Provider value={[cart, setCart, addOn]}>{children}</CartContext.Provider>
    );
};