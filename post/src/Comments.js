import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function Comments() {
   

  let [comment,setcomment]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setcomment(response.data);
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
          <td>Post Id</td>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>body</td>
        </tr>

        {
          comment.map((ele,ind)=>{
            return(
              <>

                  <tr key={ind}>
                    <td>{ele.postId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
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

export default Comments;