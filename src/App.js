import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

// Components
import Home from './Home';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume';

// Main App Component
const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Project</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>

          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/skills" element={<Skills />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;