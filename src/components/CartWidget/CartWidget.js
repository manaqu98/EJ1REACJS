import "../CartWidget/CartWidget.css";
import cartimg from '../CartWidget/shopping-cart.png'

const CartWidget = () => {
    return (
        <div className="cartWidget-container">
            <img src={cartimg} alt="Cart" className="cartimgWidget-container"/>
        </div>
    );
}

export default CartWidget;