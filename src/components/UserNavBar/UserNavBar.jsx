import "./UserNavBar.scss";
import { Link } from "react-router-dom";

const UserNavBar = () => {
  return (
    <nav className='user-navBar'>
      <div></div>
      <ul className='ul-links ul-links-user'>
        <li className="ul-link-login">
          <Link to='/user/profile' className='linkNavbar'>Mi Perfil</Link>
        </li>
        <li className="ul-link-register">
          <Link to='/' className='linkNavbar'>Salir</Link>
        </li>
      </ul>

    </nav>
  );
};
export default UserNavBar;
