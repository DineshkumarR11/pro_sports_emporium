
import Hello from './components/Home';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/log';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar';
import AboutUs from './components/about';
import ContactUs from './components/contactus';
import Products from './components/products';
function App() {
  return (
   
    <div className="App">
      <Navbar/>
    <Router>
   <Routes>

    <Route path='/' element={<Hello />} />
    <Route path='/login' element={<Login />} />
    <Route path='/r' element={<Register/>} />
    <Route path='/ab' element={<AboutUs/>} />
    <Route path='/c' element={<ContactUs/>} />
    <Route path='/p' element={<Products/>} />
    

   </Routes>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
