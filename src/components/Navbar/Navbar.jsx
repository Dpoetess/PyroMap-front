import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (    
        <div className='navBar'>
            <div className='navBarText'>
                <Link to="Register/Login" className='linkNavbar'>Iniciar sesión</Link>
                <Link to="/Register" className='linkNavbar'>Registrarse</Link>
            </div>
            
                
        </div>
        
)
}
export default Navbar