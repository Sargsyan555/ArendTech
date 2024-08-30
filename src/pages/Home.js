// src/pages/Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Category';
import './styles/Home.css';  // Import custom styles if needed
import Slider from '../components/Slider';
import MyForm from "../components/Form"
function Home() {
  const products = useSelector(state => state.products.products);

  return (
    <div className="categories">
      <Slider />
      <h2>Каталог спецтехники</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <Category key={product.id} productId={product.id} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      <div className='form'>
        <MyForm />
      </div>
    </div>
  );
}

export default Home;
