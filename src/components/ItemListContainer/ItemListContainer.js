import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.css";

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    console.log(products);

    useEffect(() => {
        fetch('https://www.mockachino.com/de419ede-2031-47/products')
            .then((response) => response.json())
            .then((json) => setProducts(json.products))
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <div className="itemListContainer-container">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;