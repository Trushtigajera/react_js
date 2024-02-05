import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Posts from './Posts';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todo from './Todo';
import User from './User';


function App() {

  return(

    <>
       <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/Posts" element={<Posts/>} exact/>
          <Route path="/Comments" element={<Comments/>} exact/>
          <Route path="/Albums" element={<Albums/>} exact/>
          <Route path="/Photos" element={<Photos/>} exact/>
          <Route path="/Todo" element={<Todo/>} exact/>
          <Route path="/User" element={<User/>} exact/>
      </Routes>
    </>
  );
  
}

export default App;

