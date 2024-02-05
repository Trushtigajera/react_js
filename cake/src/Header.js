import { Container, Row, Col, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='d-xl-block d-md-none header_part'>
                <Container>
                    <Row className='head'>
                        <Col xl={4} lg={4} className='d-lg-block d-none'>
                            <div className='d-flex head1'>
                                <a className='m-0 p-0'><IoLocationOutline></IoLocationOutline></a>
                                <div>
                                    <h5 className='m-0'>523 Sylvan Ave</h5>
                                    <p className='m-0'>Mountain View, CA 94041 USA</p>
                                </div>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className='d-lg-block d-none'>
                            <div className='head2 text-center'>
                                <img src={require('./image/p2.png')}></img>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} className='d-lg-block d-none'>
                            <div className='head3 text-end'>
                                <button><a><MdMailOutline></MdMailOutline></a>GET IN TOUCH</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='logo_hd'>
                <Container>
                    <Row>

                        <Col xl={6} lg={8} className='ms-auto'>
                            <div className='d-flex logo_right d-lg-block d-none'>
                                <div className="logo_menu d-flex justify-content-center">
                                    <Link to="/">HOME</Link>
                                    <Link to="/Gallery">GALLERY</Link>
                                    <Link to="/Element">ELEMENT</Link>
                                    <Link to="/Contact">CONTACT</Link>
                                    <Link to="/Blog">BLOG</Link>
                                    {/* <Link to="">PAGES</Link> */}
                                    {/* <a><IoLocationOutline></IoLocationOutline></a> */}
                                </div>
                            </div>
                        </Col>
                        <Col xl={6} lg={4} className='text-end'>
                            <div className='hd_icon d-lg-block d-none'>
                                <a><CiSearch></CiSearch></a>
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Container fluid="lg">
                    <Row>
                        <Col xl={6} sm={1} xs={2} className="res_btn1 d-lg-none d-xs-block">
                            <Button onClick={handleShow}>
                                <a><FaBars></FaBars></a>
                            </Button>
                            <Offcanvas className="" show={show} onHide={handleClose}>
                                <div className='responsive_off'>
                                    <Link to="/">HOME</Link>
                                    <Link to="/Gallery">GALLERY</Link>
                                    <Link to="/Element">ELEMENT</Link>
                                    <Link to="/Contact">CONTACT</Link>
                                    <Link to="/Blog">BLOG</Link>
                                    {/* <div><a>PAGES</a></div> */}
                                </div>
                            </Offcanvas>
                        </Col>
                        <Col xs={4}>
                            <div className='logo_2_res d-lg-none'>
                                <img src={require('./image/p2.png')}></img>
                            </div>
                        </Col>
                        <Col xl={6} xs={6}>
                            <div className='dropdown1 d-lg-none'>
                                <div className='hd_icon'>
                                    <a><CiSearch></CiSearch></a>
                                </div>
                                <div className='navdropdown1'>
                                    <NavDropdown>
                                        <NavDropdown.Item>
                                            <div className='d-flex head1'>
                                                <a className='m-0 p-0'><IoLocationOutline></IoLocationOutline></a>
                                                <div>
                                                    <h5 className='m-0'>523 Sylvan Ave</h5>
                                                    <p className='m-0'>Mountain View, CA 94041 USA</p>
                                                </div>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <div className='head3 text-end'>
                                                <button><a><MdMailOutline></MdMailOutline></a>GET IN TOUCH</button>
                                            </div>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    );
}
export default Header;