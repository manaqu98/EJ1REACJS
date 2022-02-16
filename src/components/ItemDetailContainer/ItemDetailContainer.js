import React, {useState, useEffect} from "react";
import axios from 'axios';
import ItemDetail from "../ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {axios('https://www.mockachino.com/de419ede-2031-47/products').then((res) => id && setDetail(res.data.products.find(item => item.id === id)));}, []);

    return(
        <div className="itemDetailContainer-container">
            <ItemDetail details={detail}/>
        </div>
    );
}

export default ItemDetailContainer;