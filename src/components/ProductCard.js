// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/ProductCard.css';

function ProductCard({ productId }) {
  const product = useSelector(state =>
    state.products.products.find(p => p.id === productId)
  );

  if (!product) return null;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img src="mixer.png" alt={product.name} />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.shortDescription}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
