import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { HiOutlineCake } from "react-icons/hi2";
import { IoFlowerOutline } from "react-icons/io5";
import Footer from './Footer';

const Home = ()=>{
    return (
        <>
            <Header></Header>
            <div className='slider'>
                <img src={require('./image/p3.jpeg')}></img>
                <Container>
                    <Row>
                        <Col xl={6} lg={6}>
                            <div className='slider1'>
                                <h2 className='m-0 p-0'>Delicious</h2>
                                <div className='d-flex slider2'>
                                    <div className='line'></div>
                                    <h3 className='m-0 p-0'>CAKES FOR YOU</h3>
                                </div>
                                <p className='m-0 p-0'>Sweet Bakery offers the best cakes and sweets for you.</p>
                                <button>SHOP NOW</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Container>
                        <div className='slider_1'>
                            <img src={require('./image/p4.jpeg')}></img>
                            <div className='contant'>
                                <h3 className='text-center p-0 m-0'>Only Fresh Cakes</h3>
                                <p className=''>All of our products are made from scratch using family recipes with only the highest quality ingredients. We bake and sell fresh daily to ensure only the best products are sold to our customers.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className='part2'>
                            <h1>WHAT WE OFFER</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} lg={4} md={6}>
                            <div className='part_img'>
                                <img src={require('./image/p5.jpeg')}></img>
                                <div className='part1'>
                                    <h3>PARTY CUPCAKES</h3>
                                    <p className='m-0'>We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>
                                    <div className='part1_btn'>
                                        <button>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6}>
                            <div className='part_img text-center'>
                                <img src={require('./image/p6.jpeg')}></img>
                                <div className='part_2'>
                                    <h3>PARTY CUPCAKES</h3>
                                    <p className='m-0'>We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>
                                    <div className='part2_btn'>
                                        <button>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className='d-lg-block d-none'>
                            <div className='part_img text-end'>
                                <img src={require('./image/p7.jpeg')}></img>
                                <div className='part'>
                                    <h3>PARTY CUPCAKES</h3>
                                    <p>We provide a variety of cupcakes for any party made with high-quality natural ingredients and no preservatives.</p>
                                    <div className='part_btn'>
                                        <button>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg3'>
                <Container>
                    <Row>
                        <Col className='text-center slide'>
                            <h1>WHY CHOOSE US</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4} lg={4} md={4} className='text-end'>
                            <div className='d-lg-flex slide_main s_line main_1'>
                                <div>
                                    <h3>QUALITY PRODUCTS</h3>
                                    <p className='m-0'>We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                                </div>
                                <div className='icon'>
                                    <a><HiOutlineCake></HiOutlineCake></a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} className='text-center slide_img d-md-block d-none'>
                            <img src={require('./image/p13.jpeg')}></img>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12}>
                            <div className='d-lg-flex slide_main s1_line main_2'>
                                <div className='icon'>
                                    <a><IoFlowerOutline></IoFlowerOutline></a>
                                </div>
                                <div>
                                    <h3>CATERING SERVICE</h3>
                                    <p>Our bakery also provides an outstanding catering service for events and special occasions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='slide_part'>
                        <Col xl={4} lg={4} md={4} sm={12} className='text-end'>
                            <div className='d-lg-flex slide_main main_1'>
                                <div>
                                    <h3>QUALITY PRODUCTS</h3>
                                    <p className='m-0'>We guarantee the quality of all the cakes we provide as they are baked using the freshest ingredients.</p>
                                </div>
                                <div className='icon'>
                                    <a><HiOutlineCake></HiOutlineCake></a>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} className='text-center'>
                            {/* <img src={require('./image/p13.jpeg')}></img> */}
                        </Col>
                        <Col xl={4} lg={4} md={4}>
                            <div className='d-lg-flex slide_main main_2'>
                                <div className='icon'>
                                    <a><IoFlowerOutline></IoFlowerOutline></a>
                                </div>
                                <div>
                                    <h3>CATERING SERVICE</h3>
                                    <p>Our bakery also provides an outstanding catering service for events and special occasions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='part_5'>
                <img src={require('./image/p15.jpeg')}></img>
                <Container>
                    <div className='SUMMER'>
                        <h1 className='m-0'>SUMMER SALE</h1>
                        <div className='d-flex sum_2'>
                            <h5 className='m-0'>-20%</h5>
                            <h3>ON ALL CAKES</h3>
                        </div>
                        <p className='p-0 m-0'>Purchase our tasty cakes and sweets for your next event or family dinner at our online shop and save more money than anywhere.</p>
                        <div className='SUMMER_btn'>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='part_6'>
                <Container>
                    <Row>
                        <Col>
                            <div className='part6_main'>
                                <h1>ABOUT US</h1>
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
            <div className='part8_main'>
                <img src={require('./image/p26.jpeg')}></img>
                <Container>
                    <div className='part8_item'>
                        <h1>Unique Flavors and Fresh Ingredients</h1>
                        <h2 className='m-0'>ALL KINDS OF CAKES</h2>
                        <div className='part8_btn'>
                            <button>READ MORE</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='main_part9'>
                <Container>
                    <div className='part9_head'>
                        <h1>LATEST NEWS</h1>
                    </div>
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12}>
                            <div className='part9_img'>
                                <img src={require('./image/p23.jpeg')}></img>
                                <div className='part_con1'>
                                    <p>August 9, 2020</p>
                                    <h3>How to Pipe a Fluffy Frosting Border on a Cake</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={6}>
                            <div className='d-flex'>
                                <div className='part9_fri'>
                                    <img src={require('./image/p24.jpeg')}></img>
                                </div>
                                <div className='part_con2'>
                                    <p>August 9, 2020</p>
                                    <h3>Recipe of the Day: Pumpkin Spice Latte Cake</h3>
                                </div>
                            </div>
                            <Row>
                                <Col>
                                    <div className='d-flex'>
                                        <div className='part9_sec'>
                                            <img src={require('./image/p25.jpeg')}></img>
                                        </div>
                                        <div className='part_con3'>
                                            <p>August 9, 2020</p>
                                            <h3>Top 5 Tips for Successful Cake Baking</h3>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='part10_main'>
                <Container>
                    <Row>
                        <Col xl={3} lg={4} md={6} sm={3}>
                            <div className='part10_icon'>
                                <img src={require('./image/p27.png')}></img>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={3}>
                            <div className='part10_icon'>
                                <img src={require('./image/p28.png')}></img>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} className='d-lg-block d-none'>
                            <div className='part10_icon'>
                                <img src={require('./image/p29.png')}></img>
                            </div>
                        </Col>
                        <Col xl={3} className='d-xl-block d-none'>
                            <div className='part10_icon'>
                                <img src={require('./image/p31.png')}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Home;