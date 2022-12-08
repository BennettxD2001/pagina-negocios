import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import POtable from './POtable';

//style
import "../css-components/style2.css";

export default function Purchase() {

    return (
        <Container style={{ justifyContent: 'left' }}>
            <br></br>
            <br></br>
            <br></br>
            <Row style={{ justifyContent: 'left' }} >
                <Col md="auto" lg={7} >
                    <br></br>
                    <br></br>
                    <div style={{ textAlign: 'left' }}>
                        <h5><b>Tus compras.</b></h5>
                    </div>
                    <POtable></POtable>
                </Col>
            </Row>
        </Container >
    );
}