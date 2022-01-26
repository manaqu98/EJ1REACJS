import "../NavBar/NavBar.css";
import logo from '../NavBar/logo.png';
import CartWidget from '../CartWidget/CartWidget.js'

const NavBar = () => {
    return (
    <main className="navBar-div">
        <header className='head-container'>
            <img src={logo} className="logoimg-container" alt="logomusical" width="50px" height="50px"/>
            <div className="navBar-container">
                <ul> 
                    <li><a href="https://www.google.com">Inicio</a></li>
                    <li><a href="https://www.google.com">Ofertas</a></li>
                    <li><a href="https://www.google.com">Instrumentos</a></li>
                    <li><a href="https://www.google.com">Amplificadores</a></li>
                    <li><a href="https://www.google.com">Pedales/Pedaleras</a></li>
                </ul>
            </div>
            <CartWidget/>
        </header>
    </main>
    );
}

export default NavBar;