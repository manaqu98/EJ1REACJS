import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.js";
import { NavLink } from "react-router-dom";
import {CartContext} from "../../Context/CartContext.js";

const ItemDetail = ({details}) => {
    const [purchased, setPurchased] = useState(false);

    const onAdd = (value) => {
        setPurchased(true);
        console.log(value);
    };

    const data = useContext(CartContext);
    console.log(data);
    console.log(CartContext);

    return(
        <div className="itemDetail-container">
            <p className="title">{details.brand + ` ` + details.model}</p>
            <p className="description">{details.description}</p>
            <img src={details.img} alt=""></img>
            <p className="price">{"Precio: $" + details.price}</p>
            {purchased?(<NavLink to="/cart"><button>Checkout</button></NavLink>):(<ItemCount stock={10} initial={1} onAdd={onAdd} />)}
        </div>
    )
}

export default ItemDetail;