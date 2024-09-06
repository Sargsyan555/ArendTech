  // src/pages/Home.js
  import React from 'react';
  import { useSelector } from 'react-redux';
  import Category from '../components/Category';
  import './styles/Home.css';  // Import custom styles if needed
  import Slider from '../components/Slider';
  // import MyForm from "../components/Form"
  function Home() {
    const texnika = useSelector((state) => state.texnika);
    const shinanyut = useSelector((state) => state.shinanyut);
    

    return (
      <div className="categories">
        <Slider />
        <div className='content'>
        <h2>Каталог спецтехники</h2>
        <div className="product-list">
          {(
            texnika.map(product => (
              <Category key={product.id} productId={[product.id, 'texnika']}/>
            ))
          )}
        </div>
        <h2>Grunt</h2>
        <div className="product-list">
          {(
            shinanyut.map(product => (
              <Category key={product.id} productId={[product.id, 'shinanyut']} />
            ))
          )}
        </div>
        </div>
      </div>
    );  
  }

  export default Home;
