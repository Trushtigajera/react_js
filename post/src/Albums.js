import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function Albums() {
   

  let [album,setalbum]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setalbum(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  })

  return (
    <>
      <table border={2}>
        <tr>
          <td>User Id</td>
          <td>Id</td>
          <td>title</td>
        </tr>

        {
          album.map((ele,ind)=>{
            return(
              <>

                  <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                  </tr>
              </> 
            )
          })
        }
      </table>c
    </>
  );
}

export default Albums;