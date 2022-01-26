import "../components/NavBar.css";
import logo from '../logo.png';

function navBar() {
    return (
    <div className="navBar-div">
        <header className='head-container'>
        <img src={logo} className="logoimg-container" alt="logomusical" width="50px" height="50px"/>
        <navBar className="navBar-container">
            <ul> 
                <li><a href="https://www.google.com">Inicio</a></li>
                <li><a href="https://www.google.com">Ofertas</a></li>
                <li><a href="https://www.google.com">Instrumentos</a></li>
                <li><a href="https://www.google.com">Amplificadores</a></li>
                <li><a href="https://www.google.com">Pedales/Pedaleras</a></li>
            </ul>
        </navBar>
        </header>
    </div>
    );
}

export default navBar;