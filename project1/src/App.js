import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Carousel } from 'react-bootstrap';
// import {ExampleCarouselImage} from 'components/ExampleCarouselImage';
// import {Carousel} from 'react-bootstrap/Carousel';
// import {Card} from 'react-bootstrap/Card';
import { ImHome3 } from "react-icons/im";
import { FaPhoneAlt, FaFacebookF, FaPinterestP, FaTwitter, FaVimeoV } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BiSearchAlt } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { TfiKey } from "react-icons/tfi";
import img1 from './image/p2.jpg';
import { IoMdMail ,IoMdTime} from "react-icons/io";
import Accordion from 'react-bootstrap/Accordion';
import { FaLocationDot,FaPhone } from "react-icons/fa6";
// import React from 'react';
// import {OwlCarousel} from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
function App() {
  return (
    <div>
      <header>
        <div className='bg1'>
          <Container>
            <Row className='top d-flex'>
              <Col xs={12} lg={8} xl={8} md={12} sm={12} className='top_left'>
                <Row>
                  <Col xl={6} lg={7} md={6} sm={10}>
                    <div className='d-flex item'>
                      <a><ImHome3></ImHome3></a>
                      <p className='m-0 p-0'>2nd Floor New World, Ground New USA.</p>
                    </div>
                  </Col>
                  <Col xl={3} lg={2} md={3} sm={2}>
                    <div className='d-flex item'>
                      <a><FaPhoneAlt></FaPhoneAlt></a>
                      <p className='m-0 p-0'>+778556778358</p>
                    </div>
                  </Col>
                  <Col xl={3} lg={6} sm={3} className=''>
                    <div className='d-flex item'>
                      <a><GrMail></GrMail></a>
                      <p className='m-0 p-0'>demo@example.com</p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4} xl={4} md={12} sm={12} className=' top_right d-flex m-0 p-0 text-sm-center'>
                <div className='right'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaPinterestP></FaPinterestP></a>
                  <a><FaVimeoV></FaVimeoV></a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <Navbar expand="lg" className="bg-body-tertiary p-4">
        <Container>
          <Navbar.Brand href="#home" className='text-lg-center'>
            <img src={require('./image/p1.png')}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className=''>
            <Nav className="ms-auto px-5 m_menu">
              <NavDropdown title="home" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">home main</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">landing page</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">video page</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />

              </NavDropdown>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Row>
            <Col className='d-lg-block d-none'>
              <div className='d-flex px-1 menu'>
                <div className='d-flex px-3 py-3'><a href='' className='px-2'><CiLock></CiLock></a>Login</div>
                <div className='d-flex px-3 py-3'><a href='' className='px-2'><TfiKey></TfiKey></a>Register</div>
                <div className='px-3 py-3'><BiSearchAlt></BiSearchAlt></div>
                <div className='front_btn'>
                  <p className='px-1 m-0 text-end'><button>Booking Now</button></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className='slider'>
            <img src={img1}></img>
          </div>
          <Carousel.Caption>
            <h3 className='slider_1 '>Our world is your hotel</h3>
            <div className='flex slider_btn'>
              <a className='m-3 btn btn1'><button>Our Service</button></a>
              <a className='m-3 btn btn2'><button>Our Service</button></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider'>
            <img src={img1}></img>
          </div>
          <Carousel.Caption>
            <h3 className='slider_1 p-0'>Our world is your hotel</h3>
            <div className='flex slider_btn'>
              <a className='m-3 btn btn1'><button>Our Service</button></a>
              <a className='m-3 btn btn2'><button>Our Service</button></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slider'>
            <img src={img1}></img>
          </div>
          <Carousel.Caption className='text-md-center'>
            <h3 className='slider_1 p-0'>Our world is your hotel</h3>
            <div className='flex slider_btn'>
              <a className='m-3 btn btn1'><button>Our Service</button></a>
              <a className='m-3 btn btn2'><button>Our Service</button></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='bg2 p-5'>
        <Container>
          <div className='text-center p-5 main2'>
            <h1>Advance Search</h1>
          </div>
          <Row className='px-5 py-4'>
            <Col xl={3} lg={3} md={6} sm={12}>
              <div className='main_btn'>
                <select>
                  <option>Arrive Date</option>
                  <option>Bangladesh</option>
                  <option>india</option>
                </select>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
              <div className='main_btn'>
                <select>
                  <option>Arrive Date</option>
                  <option>Bangladesh</option>
                  <option>india</option>
                </select>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
              <div className='main_btn'>
                <select>
                  <option>Arrive Date</option>
                  <option>Bangladesh</option>
                  <option>india</option>
                </select>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12}>
              <div className='main_btn2'>
                <button>Check Availability</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div>
        <Container>
          <Row>
            <Col xl={3} lg={4} md={6}>
              <div className='d-flex py-5'>
                <div className='about_img'>
                  <img src={require('./image/p3.jpg')}></img>
                </div>

              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className='py-5 about_img'>
                <img src={require('./image/p4.jpg')}></img>
              </div>
            </Col>
            <Col xl={6} lg={5} className='text-first'>
              <div className='about_main'>
                <div className='about'>
                  <span>about hotel</span>
                  <h1>we hotel quailty project sinc 1980</h1>
                  <p>Each color evokes different emotions for each individual. Your emotions still depend on your individual life experien. sum dolor sit amet, ctetur adipisicing.</p>
                </div>

                <div className='accordian'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore aliqua.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className='about_btn'>
                <button>MORE ABOUT</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bg3 service_main'>
        <Container>
          <Row>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex'>
                <div className='SERVICE'>
                  <span>SERVICE HOTEL</span>
                  <h1>Make Your Stay Memorable</h1>
                  <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life experience has everything for your rip & every single things. Delivering great ervice and top notch cuisines and help..</p>
                  <div className='about_btn'>
                    <button>MORE SERVICE</button>
                  </div>
                </div>

              </div>
            </Col>
            <Col xl={3} lg={4} md={6}>
              <div className='service_img'>
                <img src={require('./image/p6.jpg')}></img>
              </div>
            </Col>
            <Col xl={5} lg={4}>
              <div className='service_2'>
                <div className='d-flex'>
                  <div>
                    <img src={require('./image/p7.png')}></img>
                  </div>
                  <div>
                    <h3>Health & Beauty</h3>
                    <p>Pulvinar ipsum dolor sit amet, consectetur piscing elit. Ut elit tellus, ctus nec mcorper pulvinar dapibus leo.</p>
                  </div>
                </div>
                <div className='d-flex'>
                  <div>
                    <img src={require('./image/p7.png')}></img>
                  </div>
                  <div>
                    <h3>Our Vision</h3>
                    <p>Pulvinar ipsum dolor sit amet, consectetur piscing elit. Ut elit tellus, ctus nec mcorper pulvinar dapibus leo.</p>
                  </div>
                </div>

                <div className='d-flex '>
                  <div>
                    <img src={require('./image/p7.png')}></img>
                  </div>
                  <div>
                    <h3>Health & Beauty</h3>
                    <p>Pulvinar ipsum dolor sit amet, consectetur piscing elit. Ut elit tellus, ctus nec mcorper pulvinar dapibus leo.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className='py-5'>
            <Col xl={6} md={6} sm={6}>
              <div className='basic_img'>
                <img src={require('./image/p10.jpg')}></img>
              </div>
            </Col>
            <Col xl={6} md={6} sm={6}>
              <div className='basic'>
                <h5>BASIC HOTEL</h5>
                <h1>Start your Amazing Adventure!</h1>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life experience.</p>
                <h2>$50.00</h2>
                <h4>Per Night</h4>
                <div className='basic_btn'>
                  <p className='p-0 m-0'><button>Booking Now</button></p>
                </div>
              </div>


            </Col>
          </Row>
          <Row className='py-5'>
            <Col xl={6} md={6} sm={6}>
              <div className='basic2'>
                <h5>BASIC HOTEL</h5>
                <h1>Start your Amazing Adventure!</h1>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life experience.</p>
                <h2>$50.00</h2>
                <h4>Per Night</h4>
                <div className='basic_btn'>
                  <p className='p-0 m-0 '><button>Booking Now</button></p>
                </div>
              </div>


            </Col>
            <Col xl={6} lg={6} md={6} sm={6}>
              <div className='basic_img '>
                <img src={require('./image/p10.jpg')}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='part6'>
        <Container>
          <Row className='py-5'>
            <Col className='text-center'>
              <h5>FEATURES HOTEL</h5>
              <h1>Facilities & Features</h1>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col lg={4} md={6} sm={12}>
              <div className='d-flex FEATURES'>
                <div>
                  <img src={require('./image/p7.png')}></img>
                </div>
                <h2>Wellness & spa</h2>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className='d-flex FEATURES'>
                <div>
                  <img src={require('./image/p7.png')}></img>
                </div>
                <h2>Wellness & spa</h2>
              </div>
            </Col>
            <Col lg={4} xl={4} md={6} sm={12}>
              <div className='d-flex FEATURES'>
                <div>
                  <img src={require('./image/p7.png')}></img>
                </div>
                <h2>Wellness & spa</h2>
              </div>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col xl={6} lg={6} md={5}>
              <div className='py-4  Features'>
                <h1>Restaurant & Bar</h1>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur cupidatat non proident, sunt.</p>
                <h5>Dapibus tellus nec nibh vestibulum, vitae feugiat nunc cursus.</h5>
                <h5>Tellus nec nibh vestibulum, vitae feugiat nunc cursus.</h5>
                <h5>Feugiat epibus tellus nec nibh vestibulum, vitae nunc dursut.</h5>
                <button>Book Now</button>
              </div>
            </Col>
            <Col xl={6} lg={6} md={7}>
              <div className='ferture px-0'>
                <img src={require('./image/p12.png')}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bg_4'>
        <Container>
          <Row>
            <Col className='py-5'>
              <div className='text-center'>
                <h5>AMENITIES HOTLE</h5>
                <h1>Make Your Stay Memorable</h1>
              </div>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='d-flex AMENITIES'>
                <div>
                  <img src={require('./image/p13.png')}></img>
                </div>
                <div className='AMENITIES_any'>
                  <h2>High Wifi</h2>
                  <p>Delightful herbs and flavors consolidate surfaces to pacify wide based palates.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className=''>
            <Col xl={4} lg={4} md={6}>
              <div className='PRICING_HOTEL'>
                <h5>PRICING HOTEL</h5>
                <h1>The Best Price for a Relaxing Vacation</h1>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life experience has.</p>
                <button>More Service</button>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6}>
              <div className='PRICING_img'>
                <img src={require('./image/p14.png')}></img>
              </div>
            </Col>
            <Col xl={4} lg={4}>
              <div className='PRICING_img2'>
                <img src={require('./image/p14.png')}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bg_6'>
        <Container>
          <Row>
            <Col>
              <div className='text-center py-5'>
                <h5>FROM OUR BLOG</h5>
                <h1>News & Articles Blog</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} md={6} sm={12}>
              <div className='c_img'>
                <div className='i_1'>
                  <img src={require('./image/p15.jpg')}></img>
                </div>
                <h5 className='py-2'>Wooden Steel 01 jan 2022</h5>
                <h2>Best Price for a Relaxing Vacation</h2>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life</p>
                <button>Read More</button>
              </div>
            </Col>
            <Col xl={4} lg={4} md={6} className='d-md-block d-none'>
              <div className='c_img'>
                <div className='i_1'>
                  <img src={require('./image/p15.jpg')}></img>
                </div>
                <h5 className='py-2'>Wooden Steel 01 jan 2022</h5>
                <h2>Best Price for a Relaxing Vacation</h2>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life</p>
                <button>Read More</button>
              </div>
            </Col>
            <Col xl={4} lg={4} className='d-lg-block d-none'>
              <div className='c_img'>
                <div className='i_1'>
                  <img src={require('./image/p15.jpg')}></img>
                </div>
                <h5 className='py-2'>Wooden Steel 01 jan 2022</h5>
                <h2>Best Price for a Relaxing Vacation</h2>
                <p>Each color evokes different emotions for each individual. Your emotions still depend on your in vidual life</p>
                <button>Read More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <footer className='foot'>
        <Container>
          <Row>
            <Col xl={3} lg={3} md={6}>
              <div className='foot_1'>
                <img src={require('./image/logo2.png')}></img>
                <p>Studio practice focused on modern esign, interiors and landscapes. From our eption. Studio practice focused</p>
                <div>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><FaPinterestP></FaPinterestP></a>
                  <a><FaVimeoV></FaVimeoV></a>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className='foot_2'>
                <h2>Our Service</h2>
                <p>Architectural Design</p>
                <p>Design & Planning</p>
                <p>Furniture & Décor</p>
                <p>Construction Art Design</p>
                <p>Lighting Design</p>
              </div>

            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className='foot_3'>
                <h2>Contact Us</h2>
                <div className='d-flex py-2'>
                  <a><FaLocationDot></FaLocationDot></a>
                  <div className='px-2'>1245 Rang Raod, medical, E152 95RB</div>
                </div>
                <div className='d-flex py-2'>
                  <a><FaPhone></FaPhone></a>
                  <div className='px-2'>Telephone: (922) 3354 2252</div>
                </div>
                <div className='d-flex py-2'>
                  <a><IoMdMail></IoMdMail></a>
                  <div className='px-2'>Email: info@exmple.com</div>
                </div>
                <div className='d-flex py-2'>
                  <a><IoMdTime></IoMdTime></a>
                  <div className='px-2'>Time: 9.00am-4.00pm</div>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6}>
              <div className='foot_4'>
                <h2>Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consetur acing elit, sed do eiusmod ligal</p>
                {/* <div className='d-flex foot_send'>
                  <button>Enter your email</button>
                  <div><a>Send</a></div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
