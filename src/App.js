// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header'
import Nav from './components/Nav';






function App() {

  return (
    <Router>
      <div className="App">
      <Header />
      <Nav />
        <main className="Body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id/:category" element={<ProductDetail />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
