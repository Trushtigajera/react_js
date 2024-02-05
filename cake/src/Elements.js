import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

function Elements() {
    return (
        <>
            <Header></Header>
            <div>
                <div className="about_1"></div>
                <div className="about1_info"><h1>Elements</h1></div>
                <div className="aboutus ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRight></FaArrowRight></div>
                                    <div className="px-2">ELEMENTS</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container>
                <div className="space">
                    <div className="page_hd">Privacy Policy</div>
                    <div className="page_item">
                        <h1>H1 Heading</h1>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item">
                        <h2>H2 HEADING</h2>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item">
                        <h3>H3 HEADING</h3>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item">
                        <h4>H4 HEADING</h4>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item">
                        <h5>H5 Heading</h5>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item">
                        <h6>H6 Heading</h6>
                        <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will find exactly what he/she is looking for. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                    </div>
                    <div className="page_item"><a>privacy@demolink.org</a></div>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
}
export default Elements;