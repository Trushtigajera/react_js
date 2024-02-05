import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let [call, setcall] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setcall(response.data.results);
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
            <div className='api'>
            <h1>The Rick and Morty API</h1>
              {call.map((ele, ind) => {
                return (
                  <>
                    <Col xl={6}>
                    
                      <div className='d-flex main'>
                        <img src={ele.image}></img>
                        <div className='top'>
                          <h2>{ele.name}</h2>
                          <div className='d-flex'>
                            <div className='shap' style={{background:ele.status==="Alive" ? "green" :(ele.status==="Dead") ? 'Red' : 'gray'}}></div>
                            <h5>{ele.status} - {ele.species}</h5>
                          </div>
                          <p>Last known location:</p>
                          <h4>{ele.location.name}</h4>
                          <p>First seen in:</p>
                          <h4>{ele.origin.name}</h4>
                        </div>
                      </div>
                    </Col>
                  </>
                )
              })}
            </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
