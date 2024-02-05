import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function Posts() {
   

  let [post,setpost]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setpost(response.data);
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
          <td>body</td>
        </tr>

        {
          post.map((ele,ind)=>{
            return(
              <>

                  <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.body}</td>
                  </tr>
              </>
            )
          })
        }
      </table>
    </>
  );
}

export default Posts;