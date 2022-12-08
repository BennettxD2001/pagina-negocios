import React, { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import "../css-components/stylecook.css";
import "../css-components/style1.css";

const Cookies = () => {
    const [showAlert, setShowAlert] = useState(true);
    const alertClose = () => setShowAlert(false);
    return (
    
        <Modal show={showAlert} onHide={alertClose} >
            <Modal.Header style={{ background: "#303333", color: "#FFFFFF" }}>
                <Modal.Title>Cookies de Autos Bennett</Modal.Title>
                <CloseButton variant='white' onClick={alertClose}  ></CloseButton>
            </Modal.Header>
            <Modal.Body style={{ background: "#303333", color: "#FFFFFF" }} >
                <h6>Utilizamos cookies permanentes que se almacenan en el dispositivo del usuario y que permiten recuperar la información de la navegación en la siguiente visita. Tienen fecha de caducidad. Estas cookies nos permiten personalizar sus visitas, a través de sus preferencias (por ejemplo, país e idioma). 
                    También utilizamos cookies de terceros que permiten gestionar y mejorar los servicios ofrecidos. Como por ejemplo, los servicios estadísticos de Google Analytics.
                    <br />
                    Si continúa navegando consideramos que acepta su uso.</h6>
            </Modal.Body>
            <Modal.Footer style={{ background: "#303333", color: "#FFFFFF" }}>
                <Button variant="primary" className="bg-okay" onClick={alertClose} >Aceptar</Button>
                <Button variant="primary" className="bg-okay" onClick={alertClose}
                    href="http://www.google.com/intl/es-419/policies/technologies/types/"
                    alt="Cookies"
                    title="Link Cookies"> Más información
                </Button>
            </Modal.Footer>
        </Modal>
       
    );

}

export default Cookies;