// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import { useDispatch } from 'react-redux';
import { setProducts } from './actions/productActions';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Sample products; replace this with actual data fetching
    const products = [
      {
        id: 1,
        name: 'Product 1',
        image: '../public/images/craners.png',
        shortDescription: 'Brief description of Product 1.',
        description: 'Detailed description of Product 1.',
        price: '$100',
      },
      {
        id: 2,
        name: 'Product 2',
        image: '../public/images/craners.png',
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },
      {
        id: 3,
        name: 'Product 1',
        image: '../../public/images/craners.png',
        shortDescription: 'Brief description of Product 1.',
        description: 'Detailed description of Product 1.',
        price: '$100',
      },
      {
        id: 4,
        name: 'Product 2',
        image: '../public/images/craners.png',
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },
      // Add more products as needed
    ];

    dispatch(setProducts(products));
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="Body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
