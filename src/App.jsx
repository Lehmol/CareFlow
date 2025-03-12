import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from '../components/NavigationBar';
import Contact from '../components/Kontakt';
import Services from '../components/Services';
import About from '../components/About';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Appen from '../Application/Appen';
import VardgivarePage from '../Application/Vardgivare';


function App() {

  return (
    <Router>
      <h1 className="text-center">CareFlow</h1>
      <h3 className="text-center">Smarter Workflows, Better Care</h3>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testa-appen" element={<Appen />} />
        <Route path="/vardgivare" element={<VardgivarePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
