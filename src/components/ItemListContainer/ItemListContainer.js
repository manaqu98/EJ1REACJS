import ItemCount from "../ItemCount/ItemCount.js";
import ItemList from "../ItemList/ItemList.js"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    return(
        <div className="itemListContainer-container">
            {greeting}
            <ItemCount stock={10} initial={1} />
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;