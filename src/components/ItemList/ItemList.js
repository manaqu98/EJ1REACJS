import React from "react";
import Item from "../Item/Item.js"
import { NavLink } from "react-router-dom";
import "./ItemList.css"

const ItemList = ({products}) => {
    return(
        <div className="ItemList-container">
            {products.map((product) => (
                <NavLink key={product.id} activeclassname="active" to={`/product/${product.brand}/${product.model}`} className="Link">{<Item product={product} />}</NavLink>
            ))}
        </div>
    );
}

export default ItemList;