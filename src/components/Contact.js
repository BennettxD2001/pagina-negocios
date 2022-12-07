import React, { useState } from 'react';
import { Container, Form, Button, Row, Col,Modal } from 'react-bootstrap';

//style
import "../css-components/contact-style.css";

const Contact = () => {
    const [Contacto, setContacto] = useState({
        mensaje: ''
    });

    const [showAlert, setShowAlert] = useState(false);
    const alertClose = () => setShowAlert(false);
    const alertShow = () => setShowAlert(true);

    const onChange = (e) => {
        e.persist();
        setContacto({ ...Contacto, [e.target.name]: e.target.value });
    };

    const sendMessage=(e)=>{
        if (e && e.preventDefault()) e.preventDefault();
        alertShow();
        Contacto.mensaje="";
    }
    return (
        <Container>
            <Row style={{ justifyContent: 'left' }} >
                <Col md={5}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>AUTOS BENNETT</h1>
                    <br></br>
                    
                    <h2>CONTACTA A UN ASESOR</h2>
                    <Form onSubmit={sendMessage} style={{ textAlign: "left" }}>
                        <br></br>
                        <Form.Label><h4>Datos Personales</h4></Form.Label>
                        <br></br>

                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><b>Nombre</b></Form.Label>
                            <textarea
                                required
                                name="Nombre"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="1" cols="55"
                                placeholder="">
                            </textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><b>Email</b></Form.Label>
                            <textarea
                                required
                                name="email"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="1" cols="55"
                                placeholder="">
                            </textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><b>Teléfono</b></Form.Label>
                            <textarea
                                required
                                name="telefono"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="1" cols="55"
                                placeholder="">
                            </textarea>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label><b>Mensaje</b></Form.Label>
                            <textarea
                                required
                                name="mensaje"
                                value={Contacto.mensaje}
                                onChange={onChange}
                                type="text"
                                maxLength="250"
                                minLength={15}
                                class="text-area-border" rows="5" cols="55"
                                placeholder="">
                            </textarea>
                        </Form.Group>
                        <Button className='buttonSeeProducts' type='submit'><h6>Enviar</h6></Button>
                        <br></br>
                    </Form>
                </Col>
                <Col>
                        <br></br>
                        <img
                        width="100%"
                        height="100%"
                        alt='GMAIL'
                        title='GMAIL'
                        src="/react-example/Images/logito.jpeg">
                        </img>
                        </Col>
            </Row>
            <Form.Group className="mb-3">
                            <Form.Label><b>Mandanos un mensaje via email</b></Form.Label>
                            <br></br>
                            <Form.Label><b>AutosBennett@gmail.com</b></Form.Label>
                        </Form.Group>

            <Modal show={showAlert} onHide={alertClose}>
        <Modal.Header style={{
            background:"#a5edff"
          }} closeButton>
          <Modal.Title>Mensaje enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Agradecemos todos tus comentarios. Responderemos a la mayor brevedad posible.</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={alertClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

        </Container>
    );
}

export default Contact;