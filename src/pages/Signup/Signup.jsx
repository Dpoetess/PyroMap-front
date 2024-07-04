
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.scss";


const Signup = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    adress: "",
    postcode: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para backend (url?)

    navigate("/user");
    
  };

  return (
    <div className="form-container">
      <div className="welcome-message">
        <p>¡Bienvenido/a a PyroMap!</p>
        <span>Tu portal de voluntariado para prevenir incendios</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p className="signup-title">Registro</p>
          <div className="form-Colums">
            <div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingUserName"
                  placeholder="Nombre de usuario"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingUserName">Nombre de usuario</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingInput">Correo Electrónico</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
            </div>
            <div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingAddress"
                  placeholder="Dirección"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingAddress">Dirección</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPostcode"
                  placeholder="Código Postal"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingPostcode">Código Postal</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPhoneNumber"
                  placeholder="Número de Teléfono"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="floatingPhoneNumber">Número de Teléfono</label>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary mt-3">
              ENTRAR
            </button>
            <p>
              ¿YA tienes una cuenta? Ingresa <Link to="/register/login">aquí</Link>
            </p>
          </div>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
};
export default Signup;