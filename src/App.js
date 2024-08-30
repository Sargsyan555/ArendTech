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
import katok from './assets/images/katok.png'
import avtokran from './assets/images/avtokran.png'
import eskavator from './assets/images/eskavator.png'
import nasos from './assets/images/nasos.png'
import pagruzchik from './assets/images/pagruzchik.png'
import avtovishka from './assets/images/avtovishka.png'
import manikulyator from './assets/images/manikulyator.png'
import buldozer from './assets/images/buldozer.png'
import yamobur from './assets/images/yamobur.jpg'




function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // Sample products; replace this with actual data fetching
    const products = [
      {
        id: 1,
        name: 'Катки',
        image: katok,
        shortDescription: 'Brief description of Product 1.',
        description: 'Detailed description of Product 1.',
        price: '$100',
      },
      {
        id: 2,
        name: 'Автобетононасос',
        image: nasos,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },
      {
        id: 3,
        name: 'Автокраны',
        image: avtokran,
        shortDescription: 'Brief description of Product 1.',
        description: 'Detailed description of Product 1.',
        price: '$100',
      },
      {
        id: 4,
        name: 'Экскаваторы',
        image: eskavator,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },{
        id: 5,
        name: 'Погрузчики',
        image: pagruzchik,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },{
        id: 6,
        name: 'Автовышки',
        image: avtovishka,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },{
        id: 7,
        name: 'Манипуляторы',
        image: manikulyator,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },{
        id: 8,
        name: 'Бульдозеры',
        image: buldozer,
        shortDescription: 'Brief description of Product 2.',
        description: 'Detailed description of Product 2.',
        price: '$150',
      },{
        id: 9,
        name: 'Ямобуры',
        image: yamobur,
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
