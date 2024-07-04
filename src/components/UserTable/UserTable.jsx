/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import Button from '../Button/Button';
import './UserTable.scss'

function UserTable({handleShow, data  }) {

    return (
        <Table striped bordered hover className="user-table">
            <thead className="user-table-head">
                <tr>
                    <th>#</th>
                    <th>Ciudad</th>
                    <th>Pais</th>
                    <th>¿Quieres ayudarnos?</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((fire, index) => (
                    <tr key={index} className="user-table-row">
                        <td>{index + 1}</td>
                        <td>{fire.city}</td>
                        <td>{fire.country}</td>
                        <td><Button 
                            text="Me Apunto!" 
                            type="button" 
                            className="user-table-button"
                            handleClick={() => {handleShow()}}
                            /></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
}

export default UserTable;