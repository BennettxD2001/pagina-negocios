import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import Footer from "./Footer";
import HomeProducts from "./HomeProducts";
import Cookies from "./Cookies";

const Home = () => {
    return (
        <Container fluid>
            <Carousel fade>
                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="http://www.diamondpearlz.com/wp-content/uploads/2015/12/banner-1.jpg"                            
                            class="d-block w-100"
                            alt="First slide"
                            title="Carousel1"
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <div class="col text-center">
                        <img
                            className="img-fluid shadow-4"
                            src="/react-example/Images/comprarco.jpg"
                            class="d-block w-100"
                            alt="Second slide"
                            title="Carousel2"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 style={{ textAlign: "center", backgroundColor: "rgba(255,255,255, .2)", backdropFilter: "blur(10px)" }} >Clientes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <br></br>
            </div>
            <HomeProducts></HomeProducts>
            <Cookies></Cookies>
            <Footer></Footer>
        </Container>
    );

}

export default Home;