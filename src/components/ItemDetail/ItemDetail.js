import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({details}) => {
    return(
        <div className="itemDetail-container">
            <p className="title">{details.title}</p>
            <p className="description">{details.description}</p>
            <img src={details.img} alt=""></img>
            <p className="price">{"Precio: $" + details.price}</p>
        </div>
    )
}

export default ItemDetail;