// src/pages/Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Category';
import './styles/Home.css';  // Import custom styles if needed
import Header from '../components/Header';
// import MyForm from "../components/Form"
function Home() {
  const texnika = useSelector((state) => state.texnika);
  const shinanyut = useSelector((state) => state.shinanyut);
  

  return (
    <div className="categories">
      <Header />
      <div className='content'>
      <h2>Каталог спецтехники</h2>
      <div className="product-list">
        {texnika.length > 0 ? (
          texnika.map(product => (
            <Category key={product.id} productId={[product.id, 'texnika']}/>
          ))
        ) : (
          <p>No texnika available</p>
        )}
      </div>
      <h2>Grunt</h2>
      <div className="product-list">
        {shinanyut.length > 0 ? (
          shinanyut.map(product => (
            <Category key={product.id} productId={[product.id, 'shinanyut']} />
          ))
        ) : (
          <p>No texnika available</p>
        )}
      </div>
      {/* <div className='form'>
          <MyForm />
        </div> */}
      </div>
    </div>
  );  
}

export default Home;
