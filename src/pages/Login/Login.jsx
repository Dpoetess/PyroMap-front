import "./Login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar datos a la API (URL?)
    console.log("Email:", email);
    console.log("Password:", password);

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
          <p className="signup-title">Iniciar sesión</p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Correo Electrónico</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>
          <div className="button-container">
            <Button type="submit" text="ENTRA" />
            <p>
              ¿No tienes una cuenta? Regístrate <Link to="/register">aquí</Link>
            </p>
          </div>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
