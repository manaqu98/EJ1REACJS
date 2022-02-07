import React, {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList.js"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);

	console.log(products);

    useEffect(() => {
		fetch('https://www.mockachino.com/de419ede-2031-47/products')
		.then((response) => response.json())
		.then((json) => setProducts(json))
        .catch((error)=>{console.log(error)})
	}, []);

    return(
        <div className="itemListContainer-container">
            {greeting}
            {products.map((product) => {
				return (
					<div key={product.id}>
						<ItemList products={products} />
					</div>
				);
			})}
        </div>
    );
}

export default ItemListContainer;