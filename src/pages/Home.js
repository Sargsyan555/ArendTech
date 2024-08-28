// src/pages/Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';  // Import custom styles if needed

function Home() {
  const products = useSelector(state => state.products.products);

  return (
    <div className="Body">
      <h2>Home Page</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} productId={product.id} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Home;
