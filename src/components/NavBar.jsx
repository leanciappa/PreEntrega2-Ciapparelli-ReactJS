import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <header className="header">
            <div className="headerContainer">  
                <a href="/" className="logo">
                    <img src="/img/valvula.jpg" alt="" />
                </a>
            <nav className="headerNav">
                <Link to="/" className="link">Inicio</Link>
                <Link to="/nosotros" className="link">Nosotros</Link>
                <Link to="/contacto" className="link">Contacto</Link>
                <Link to="#" className="link">ARMA TU PC!</Link>
            </nav>
            </div>

        </header>
    )
}

export default NavBar
