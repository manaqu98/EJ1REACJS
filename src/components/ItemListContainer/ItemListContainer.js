import ItemCount from "../ItemCount/ItemCount.js";

const ItemListContainer = ({ greeting }) => {
    return(
        <div className="itemListContainer-container">
            {greeting}
            <ItemCount/>
        </div>
    );
}

export default ItemListContainer;