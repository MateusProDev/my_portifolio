// src/components/NavBar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Certifique-se de importar o arquivo de estilos

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img src="./img/perfil.png" alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <span className={`menu-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-line ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-line ${isMenuOpen ? "open" : ""}`}></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link id="color-home" to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/contact">Serviços</Link>
        </li>
        <li>
          <Link to="/avaliações">Contatos</Link>
        </li>
      </ul>
      <nav className={`social-links ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links-mobile">
          <li>
            <Link id="mobaHome" to="/">Home</Link>
          </li>
          <li>
            <Link id="mobaSobre" to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contact">Serviços</Link>
          </li>
          <li>
            <Link id="mobaContat" to="/avaliações">Contatos</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
