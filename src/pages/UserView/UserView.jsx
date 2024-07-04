import React, { useContext } from 'react';
import './UserView.scss';

const UserView = () => {

  const handleJoin = (eventId) => {
    console.log(`Usuario ${user.email} se ha apuntado al evento ${eventId}`);
  };

  return (
    <div className="userview-container">
      <header>
        <nav>
          <ul>
            <li>Mi perfil</li>
            <li>Salir</li>
          </ul>
        </nav>
      </header>
      <main>
        <input type="text" placeholder="Buscar incendios" />
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Duración</th>
              <th>Fecha</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Incendio A</td>
              <td>Ciudad A</td>
              <td>País A</td>
              <td>1 semana</td>
              <td>01/07/2024</td>
              <td><button className="join-button" onClick= {() => handleJoin('A')}>ME APUNTO</button></td>
            </tr>
            <tr>
              <td>Incendio B</td>
              <td>Ciudad B</td>
              <td>País B</td>
              <td>2 semanas</td>
              <td>02/07/2024</td>
              <td><button className="join-button" onClick={() => handleJoin('B')}>ME APUNTO</button></td>
            </tr>
            <tr>
              <td>Incendio C</td>
              <td>Ciudad C</td>
              <td>País C</td>
              <td>3 días</td>
              <td>03/07/2024</td>
              <td><button className="join-button" onClick={() => handleJoin('C')}>ME APUNTO</button></td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default UserView;
