import React, {useState, useEffect} from "react";
import axios from 'axios';
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState([]);

    console.log(detail);
    
    useEffect(() => {
        axios('https://www.mockachino.com/de419ede-2031-47/productdata').then((res) => setDetail(res.data));
    }, []);

    return(
        <div className="itemDetailContainer-container">
            <ItemDetail  details={detail}/>
        </div>
    )
}

export default ItemDetailContainer;