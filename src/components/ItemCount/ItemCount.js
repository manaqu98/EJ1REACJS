import React, { useState } from "react";

const ItemCount = ({stock, initial}) => {
    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        setCounter(counter + 1);
    };

    const handlerCounterDown = () => {
        setCounter(counter - 1);
    }

    return(
        <div className="itemcount-container">
            <h1>Quantity</h1>
            <p>{counter}</p>
            <button onClick={() => stock === counter
                ? alert("No more stock")
                : handlerCounterUp()}>Add</button>
            <button onClick={() => counter > 1
                ? handlerCounterDown()
                : alert("You can't remove more units")}>Remove</button>
        </div>
    );
}

export default ItemCount;