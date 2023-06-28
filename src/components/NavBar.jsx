import { Link } from "react-router-dom"
import './Navbar.css'
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header className="header">
            <div className="headerContainer">  
                <a href="/" className="logo">
                    <img src="/img/valvula.jpg" alt="" />
                </a>
            <nav className="headerNav">
                <Link to="/" className="link">INICIO</Link>
                <Link to="/nosotros" className="link">NOSOTROS</Link>
                <Link to="/contacto" className="link">CONTACTO</Link>
                <Link to="#" className="link">ARMA TU PC!</Link>
                <Link to="CartWidget"></Link>
            </nav>
            <CartWidget />

            </div>

        </header>
    )
}

export default NavBar
