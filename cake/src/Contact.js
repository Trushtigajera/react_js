import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    return(
        <>
            <Header></Header>
            <div>
                <div className="about_1"></div>
                <div className="about1_info"><h1>Contact</h1></div>
                <div className="aboutus ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRight></FaArrowRight></div>
                                    <div className="px-2">CONTACT</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="contact_main">
                <Container>
                    <Row className="con_1">
                        <Col xl={3} lg={4} md={5}>
                            <div className="contact_info">
                                <h1>GET IN TOUCH</h1>
                            </div>
                        </Col>
                        <Col xl={6} lg={8} md={7}>
                            <div className="contact_info">
                                <p>We are available 24/7 by fax, e-mail or by phone. You can also use our quick contact form to ask a question about our products.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="contact_2">
                        <Col xl={4} lg={4} md={6}>
                            <div>
                                <h5>First Name</h5>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6}>
                            <div>
                                <h5>Last Name</h5>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={6}>
                            <div>
                                <h5>Message</h5>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h5>E-mail</h5>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h5>Phone</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="back_con">
                <Container>
                    <Row className="py-5">
                        <Col xl={4} lg={4} md={4} className="text-center">
                            <div className="contact_us">
                                <h3 className="py-3">PHONES</h3>
                                <p className="m-0 p-0">Office +1 (409) 987–5874</p>
                                <p>Fax +1 (409) 987–5874</p>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} className="text-center">
                            <div className="contact_us">
                                <h3 className="py-3">ADDRESS</h3>
                                <p className="m-0 p-0">523 Sylvan Ave, 5th Floor</p>
                                <p>Mountain View, CA 94041 USA</p>
                            </div>
                        </Col>
                        <Col xl={4} lg={4} md={4} className="text-center">
                            <div className="contact_us">
                                <h3 className="py-3">E-MAILS</h3>
                                <p className="m-0 p-0">info@demolink.org</p>
                                <p>info@demolink.org</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Contact;