import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar.js'
import Footer from './components/footer/Footer';
import Signup from './components/inscription/Signup'
import Signin from './components/signin/Signin';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
<Routes> 
       
          <Route path="/nav" element={<NavBar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
