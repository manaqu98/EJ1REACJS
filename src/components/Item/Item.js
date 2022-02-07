import React from "react";
import "./Item.css"

const Item = ({product}) => {
    return(
        <div className="item-container">
            <p className="id">{product.id}</p>
            <p className="brand">{product.brand}</p>
            <p className="model">{product.model}</p>
            <img src={product.img} alt=""></img>
            <p className="price">{"Precio: $" + product.price}</p>
        </div>
    );
}

export default Item;