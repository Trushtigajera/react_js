
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import Elements from './Elements';
import Contact from './Contact';
import Blog from './Blog';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/GALLERY" element={<Gallery/>} exact/>
        <Route path="/ELEMENT" element={<Elements/>} exact/>
        <Route path="/CONTACT" element={<Contact/>} exact/>
        <Route path="/BLOG" element={<Blog/>} exact/>
      </Routes>
    </>
  );
}

export default App;
