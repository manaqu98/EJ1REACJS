import "../NavBar/NavBar.css";
import logo from '../NavBar/logo.png';
import CartWidget from '../CartWidget/CartWidget.js';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <main className="navBar-div">
        <header className='head-container'>
            <img src={logo} className="logoimg-container" alt="logomusical" width="50px" height="50px"/>
            <div className="navBar-container">
                <ul> 
                    <li><NavLink activeclassname="active" to="/" className="Link">Home</NavLink></li>
                    <li><NavLink activeclassname="active" to="/offers" className="Link">Offers</NavLink></li>
                    <li><NavLink activeclassname="active" to="/instruments" className="Link">Instruments</NavLink></li>
                    <li><NavLink activeclassname="active" to="/amplifiers" className="Link">Amplifiers</NavLink></li>
                    <li><NavLink activeclassname="active" to="/stompboxes-multieffects" className="Link">Stompboxes/Multi-effects</NavLink></li>
                </ul>
            </div>
            <CartWidget/>
        </header>
    </main>
    );
}

export default NavBar;