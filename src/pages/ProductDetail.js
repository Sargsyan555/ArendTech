import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles/ProductDetail.css';

function ProductDetail() {
  const  param  = useParams();
  const id = param.id;
  

  const products = useSelector(state => state[param.category]);
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <div className="product-detail" id='content'>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p><strong>Price:</strong> {product.price}</p>
      </div>
    </>
  );
}

export default ProductDetail;
