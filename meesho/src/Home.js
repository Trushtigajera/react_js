import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuDot } from "react-icons/lu";
import axios from 'axios';
import Search from "./Search";


function Home() {
  let [data, setdata] = useState([]);
  let [datapro, setdatapro] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setdatapro(response.data.products);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });


  }, [])
  return (
    <>
      <div className="header">
        <div className='top_header'>
          <div className='image'>
            <img src={require('./Image/logo.png')}></img>
          </div>
          <div className='text'>
            <div className='left'>
              <ul>
                <li>men</li>
                <li>women</li>
                <li>kids</li>
                <li>home&living</li>
                <li>beauty</li>
                <li>studio</li>
              </ul>
            </div>
            <div className="middle">
              <div className="serach pt-1">
                <FaSearch></FaSearch>
              </div>
              <Search></Search>
            </div>
            <div className='last'>
              <div className='input'>
                <a><CgProfile></CgProfile></a>
                <a><FaRegHeart></FaRegHeart></a> 
                <a><RiShoppingBagLine></RiShoppingBagLine></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className='category'>
        <Container fluid>
          <Row>
            <Col>
              <h1>catagories</h1>
              {
                data.map((ele, ind) => {
                  return (
                    <>
                      <p><LuDot></LuDot>{ele}</p>
                    </>
                  )
                })
              }
            </Col>
          </Row>
        </Container>
      </div>  
      <div className="products_smartphone">
        <Container>
          <Row>
            <Col className="cards" lg={4}>
              {
                datapro.map((ele, ind) => {
                  return (
                    <>
                      <div className="main_div">
                        <div className="imgs">
                          <img src={ele.thumbnail}></img>
                        </div>
                        
                        <div className="content">
                          <p><span className="abc"><GoDotFill></GoDotFill></span>{ele.id}</p>
                          <p><span><FaHeart></FaHeart></span>{ele.title}</p>
                          <p>{ele.description}</p>
                          <p>${ele.price}</p>
                          <p>{ele.discountPercentage} % </p>
                          {/* <p>{ele.rating}</p>
                                                <p>{ele.stock}</p>
                                                <p>{ele.brand}</p> */}
                          <p>{ele.category}</p>
                          <button>purchase now</button>
                        </div>
                      </div>
                    </>
                  )
                })

              }
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )

}
export default Home;



