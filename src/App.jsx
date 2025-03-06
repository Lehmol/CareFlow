import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/Kontakt';
import Services from '../components/Services';
import About from '../components/About';


function App() {

  return (
    <Router>
      <h1 className="text-center">CareFlow - Smarter Workflows, Better Care</h1>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
