/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div></div>
      <ul className="ul-links ul-links-nav">
        <li>
          <Link to="/" className="linkNavbar">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="linkNavbar">
            About
          </Link>
        </li>
      </ul>
      <ul className="ul-links ul-links-user">
        <li className="ul-link-login">
          <Link to="/register/login" className="linkNavbar">
            Iniciar Sesión
          </Link>
        </li>
        <li className="ul-link-register">
          <Link to="/register" className="linkNavbar">
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
