/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import Button from '../Button/Button';

function UserTable({handleShow }) {

    return (
        <Table striped bordered hover className="user-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ciudad</th>
                    <th>Comunidad</th>
                    <th>Duración</th>
                    <th>Fecha</th>
                    <th>¿Quieres ayudarnos?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><Button 
                    text="Me Apunto!" 
                    type="button" 
                    className="user-table-button"
                    handleClick={() => {handleShow()}}
                    /></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default UserTable;