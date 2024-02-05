import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

function Blog(){
    return(
        <>
            <Header></Header>
            <div>
                <div className="about_1"></div>
                <div className="about1_info"><h1>Blog</h1></div>
                <div className="aboutus ">
                    <Container>
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <div className="active px-2">HOME</div>
                                    <div className="px-2"><FaArrowRight></FaArrowRight></div>
                                    <div className="px-2">BLOG</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className='main_part9'>
                <Container>
                    <div className='part9_head'>
                        <h1>RELATED POSTS</h1>
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
            <div className="bg3">
                <Container>
                    <Row>
                        <Col className='part2'>
                            <h1>CATEGORIES</h1>
                        </Col>
                    </Row>
                    <Row className="blog_part">
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
            <Footer></Footer>
        </>
    );
}
export default Blog;