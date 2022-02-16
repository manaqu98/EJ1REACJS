//import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.js";
import { NavLink } from "react-router-dom";

const OnAdd = ({stock, setCounter, counter, details}) => {
    console.log("It works!");
    console.log(stock);
    console.log(setCounter);
    console.log(counter);
};

const ItemDetail = ({details}) => {
    return(
        <div className="itemDetail-container">
            <p className="title">{details.brand + ` ` + details.model}</p>
            <p className="description">{details.description}</p>
            <img src={details.img} alt=""></img>
            <p className="price">{"Precio: $" + details.price}</p>
            <ItemCount stock={10} initial={1}/>
            <p></p>
            <NavLink activeclassname="active" to="/cart" className="Link"><button onClick={OnAdd}>Agregar al carrito</button></NavLink>
        </div>
    )
}

export default ItemDetail;