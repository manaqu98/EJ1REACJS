import Item from "../Item/Item.js"
import "./ItemList.css"

const ItemList = () => {
    return(
        <div className="ItemList-container">
            <Item brand={"Ibanez"} model={"RG350DXWH"} img={"https://andertons-productimages.imgix.net/64143-RG350DXZ-BL.jpg?w=680&h=680&fit=fill&bg=FFFFFF&auto=compress&auto=format"} price={90000} />
        </div>
    );
}

export default ItemList;