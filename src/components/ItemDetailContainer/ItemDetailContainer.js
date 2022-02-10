import React, {useState, useEffect} from "react";
import axios from 'axios';
import ItemDetail from "../ItemDetail/ItemDetail.js";
//import { NavLink } from "react-router-dom";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [detail, setDetail] = useState([]);

    console.log(detail);
    console.log(detail.length);
    let id = useParams();
    let ID = id.id;
    console.log(id);
    console.log(ID);
    //console.log(detail.find( ide => ide.id === ID));
    //const resultado = detail.find( ide => ide.id === ID);
    //console.log(resultado);


    useEffect(() => {
        axios('https://www.mockachino.com/de419ede-2031-47/detail').then((res) => setDetail(res.data));
    }, []); /* -------> description in object expression*/

    /*useEffect(() => {
        axios('https://www.mockachino.com/de419ede-2031-47/detailv2').then((res) => setDetail(res.data));
    }, []);  ------> description in array expression*/

    /*return(
        <div className="itemDetailContainer-container">
            {detail.find(ide => ide.id === 
                <NavLink key={ide.id} activeclassname="active" to={`/instruments/${ide.id}`} className="Link">
                    <ItemDetail details={detail}/>
                </NavLink>
            )}
        </div>
    ); --------> intento de utilizacion de find*/

    return(
        <div className="itemDetailContainer-container">
            <ItemDetail details={detail}/>
        </div>
    );
}

export default ItemDetailContainer;