import "./Item.css"

const Item = ({id, brand, model, img, price}) => {
    return(
        <div className="item-container">
            <p className="id">{id}</p>
            <p className="brand">{brand}</p>
            <p className="model">{model}</p>
            <img src={img} alt=""></img>
            <p className="price">{"Precio: $" + price}</p>
        </div>
    );
}

export default Item;