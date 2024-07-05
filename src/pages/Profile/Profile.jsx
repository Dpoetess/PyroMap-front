import { useState, useEffect } from 'react';
import './Profile.scss';

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        postcode: '',
        phone: ''
    });

    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            const parsedData = JSON.parse(data);
            setUserData({
                name: parsedData.name || '',
                email: parsedData.email || '',
                password: parsedData.password || '',
                address: parsedData.address || '',
                postcode: parsedData.postcode || '',
                phone: parsedData.phone || ''
            });
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Datos guardados correctamente');
    };

    const handleDelete = () => {
        localStorage.removeItem('userData');
        setUserData({
            name: '',
            email: '',
            password: '',
            address: '',
            postcode: '',
            phone: ''
        });
        alert('Cuenta eliminada correctamente');
    };

    return (
        <div className="userProfileContainer">
            <h1 className='userProfileTitle'>Perfil {userData.name}</h1>
            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label htmlFor="name">Nombre de usuario</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postcode">Código Postal</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={userData.postcode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='userProfileButton'>
                    <button type="submit" className='userProfilebutton1'>GUARDAR</button>
                    <button type="button" className='userProfilebutton2' onClick={handleDelete}>ELIMINAR CUENTA</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
