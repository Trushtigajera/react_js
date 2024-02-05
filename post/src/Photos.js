import './App.css';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function Photos() {


    let [photo, setphoto] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setphoto(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    })

    return (
        <>
            <Container>
                <Row>
                {
                    photo.map((ele, ind) => {
                        return (
                            
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img src={ele.url} />
                                        <Card.Body>
                                            <Card.Title>{ele.albumId}</Card.Title>
                                            <Card.Title>{ele.id}</Card.Title>
                                            <Card.Text>
                                                {ele.title}
                                            </Card.Text>
                                            <Card.Title>{ele.thumbnailUrl}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            
                        )
                    })
                }
                </Row>
            </Container>
        </>
    );
}

export default Photos;