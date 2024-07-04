import './Profile.scss'

const Profile = () => {
    return (
        <>
        <div><p className='userProfileTitle'>Mi perfil</p></div>
        <form className='userProfileContainer'>
        <div><label htmlFor="name">Nombre de usuario</label><input type="name"  required></input></div>
        <div><label htmlFor="email">Correo electrónico</label><input type= "email"></input></div>
        <div><label htmlFor="password">Contraseña</label><input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></input></div>
        <div><label htmlFor="address">Dirección</label><input type= ""></input></div>
        <div><label htmlFor="postcode">Código Postal</label><input type= ""></input></div>
        <div><label htmlFor="phone">Teléfono</label><input type= ""></input></div>
        </form>
        <div className='userProfileButton'>
        <button className='userProfilebutton1'><p>GUARDAR</p></button>
        <button className='userProfilebutton2'><p>ELIMINAR CUENTA</p></button>

        </div>
       
        </>
    )
}
export default Profile