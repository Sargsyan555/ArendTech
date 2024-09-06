// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/Category.css';

function ProductCard({ productId }) {
  
  const product = useSelector(state =>{
    if(productId[1] === "shinanyut"){
      return state.shinanyut.find(p => p.id === productId[0])
    }else{
      return state.texnika.find(p => p.id === productId[0])
    }
  }
  );

  if (!product) return null;

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}/${productId[1]}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
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
