import './App.css';
import axios from 'axios';

import { useEffect, useState } from 'react';
// import { Container,Row,Col, Table } from 'react-bootstrap';

function Todo() {
   

  let [todo,settodo]=useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        // handle success
        console.log(response.data);
        settodo(response.data);
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
          <td>Title</td>
          <td>Completed</td>    
        </tr>

        {
          todo.map((ele,ind)=>{
            return(
              <>

                  <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.completed ? 'True' : 'false'}</td>
                  </tr>
              </>
            )
          })
        }
      </table>
    </>
  );
}

export default Todo;