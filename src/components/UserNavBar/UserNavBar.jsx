import "./UserNavBar.scss";
import { Link, useLocation } from "react-router-dom";

const UserNavBar = () => {
  const location = useLocation();


  const isProfilePage = location.pathname === '/user/profile';

  return (
    <nav className='user-navBar'>
      <div></div>
      <ul className='ul-links ul-links-user'>
        <li className="ul-link-login">

          {isProfilePage ? <Link to='/user' className='linkNavbar'>Ver donde puedo ayudar </Link> : <Link to='/user/profile' className='linkNavbar'>Mi Perfil</Link>}

        </li>
        <li className="ul-link-register">
          <Link to='/' className='linkNavbar'>Salir</Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavBar;

