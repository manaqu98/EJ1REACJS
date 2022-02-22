import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([]);

    /*const addOn = (details, value) => { 
        const item = {id: details.id, quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        setCart(currentState => [...currentState, item]);
    }; --------> Como estaba antes*/
    
    /*const addOn = (details, value) => { 
        const item = {id: details.id, quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        setCart(currentState => [...currentState, item]);
        cart.map(items => items.id === details.id
            ? console.log(`El item ya existe`)
            : console.log(`El item no existe, fue agregado`));
    };------------> Asi funciona correctamente los console.log, pero siempre agrega el producto por la linea 15*/

    const addOn = (details, value) => { 
        const item = {id: details.id, quantity: value, item: details.brand+` `+details.model, price: details.price*value};
        cart.map(items => items.id === details.id
            ? console.log(`El item ya existe`)
            : setCart(currentState => [...currentState, item]));
    };/*Intento para que filtre si existe el producto y segun el resultado lo agregue o no*/

    console.log(cart);

    return(
        <CartContext.Provider value={[cart, setCart, addOn]}>{children}</CartContext.Provider>
    );
};