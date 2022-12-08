import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import UserEdit from './UserEdit'

export default function Usuario() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [users, setUser] = useState([
        {
            id: 1,
            nombre: "Bennett",
            apellidos: "Mtz",
            email: "bennett@ita.com",
            contraseña: "12345678",
            fechaNacimiento: "07/09/2001"
        },
        {
            id: 2,
            nombre: "Luis Fernando",
            apellidos: "Gutiérrez Hernández",
            email: "luisGH2001@gmail.com",
            contraseña: "789dshj9h5g",
            fechaNacimiento: "01/01/2001"
        },
        {
            id: 3,
            nombre: "Jennifer",
            apellidos: "Rodriguez",
            email: "jenny@ita.com",
            contraseña: "12345678",
            fechaNacimiento: "25/08/2001"
        },
        {
            id: 4,
            nombre: "Andrea",
            apellidos: "León Aceves",
            email: "leon.acevesandrea@gmail.com",
            contraseña: "1dsa483dt4",
            fechaNacimiento: "09/11/2001"
        }
    ]);

    function deleteTest(id) {
        setUser(users.filter(user => user.id !== id))
    }

    function editTest(datos) {
        setUser(users.map(user => user.id === datos.id ? datos : user));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }


    return (
        <>
            <Container fluid>
                <caption align="center">Usuarios</caption>
                <Table responsive="md" striped bordered hover variant="ligth"
                    style={{
                        background: "#c0c0c0",
                        borderColor: "white"
                    }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Correo electrónico</th>
                            <th>Contraseña</th>
                            <th>Fecha de Nacimiento</th>
                        </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                        {
                            users.map((user, i) => {
                                return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellidos}</td>
                                    <td>{user.email}</td>
                                    <td>{user.contraseña}</td>
                                    <td>{user.fechaNacimiento}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(user.id)}>Borrar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(user)}>Editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <UserEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}