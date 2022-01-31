import React, { useState } from "react";

const ItemCount = () => {
    const [counter, setCounter] = useState(0);

    let stock = 10;

    const handlerCounterUp = () => {
        setCounter(counter + 1);
    };

    return(
        <div className="itemcount-container">
            <h1>Cantidad</h1>
            <p>{counter}</p>
            <button onClick={stock === counter
                ? alert("No hay mas stock")
                : handlerCounterUp}>Agregar</button>
            <button onClick={() => setCounter(counter - 1)}>Quitar</button>
        </div>
    );
}

export default ItemCount;