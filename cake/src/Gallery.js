import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

function Gallery() {
    return (
        <>
            <Header></Header>
            <div>
                <div className="about_1"></div>
                <div className="about1_info"><h1>Gallery</h1></div>
                <div className="aboutus ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRight></FaArrowRight></div>
                                    <div className="px-2">GALLERY</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='bg3'>
                <Container>
                    <Row>
                        <Col>
                            <div className='part_7'>
                                <h1>GALLERY</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className='part7_item'>
                        <Col xl={4} lg={4} md={6}>
                            <div className='part7_img'>
                                <img src={require('./image/p23.jpeg')}></img>
                                <h4>RICHARD SMITH</h4>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6}>
                            <div className='part7_img'>
                                <img src={require('./image/p24.jpeg')}></img>
                                <h4>SUSAN ANDERSON</h4>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className='d-lg-block d-md-none'>
                            <div className='part7_img'>
                                <img src={require('./image/p25.jpeg')}></img>
                                <h4>STEVE RUFFALO</h4>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className='part_6'>
                <Container>
                    <Row>
                        <Col>
                            <div className='part6_main'>
                                <h1>LATEST NEWS</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6} lg={6} >
                            <div className='part6_img'>
                                <img src={require('./image/p16.jpeg')}></img>
                            </div>
                        </Col>
                        <Col xl={6} lg={6}>
                            <div className='part6_item'>
                                <h2>PROVIDING QUALITY BAKED GOODS FOR ALL CUSTOMERS</h2>
                                <p>Our mission is to create a bakery that makes the best quality baked goods on site from scratch, and where both employees and customers would feel comfortable.</p>
                                <div className='part6_btn'>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                            <Row className='img_part'>
                                <Col>
                                    <div>
                                        <img src={require('./image/p17.jpeg')}></img>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src={require('./image/p18.jpeg')}></img>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img src={require('./image/p19.jpeg')}></img>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Gallery;