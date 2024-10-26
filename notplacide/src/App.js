import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Project from './Components/Project';
import Services from './Components/Services';

const App = () => {
  return (
    <Router>
      <div>
        <div id='headers'>
          <div id='logo'>
            <Link to="/">  <h1 id='logoname'>PLCD</h1> </Link>
          </div>


          <div id='sublinks' >
            <Link to="/">    <h4>Home</h4> </Link>
            <Link to="/project">    <h4>Projects</h4> </Link>
            <Link to="/services">    <h4>services</h4> </Link>
            <Link to="/contact">    <h4>Contact</h4> </Link>
          </div>
        </div>

        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
