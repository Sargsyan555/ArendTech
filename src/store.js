// store.js
import { createStore } from 'redux';
import katok from './assets/images/katok.png'
import avtokran from './assets/images/avtokran.png'
import eskavator from './assets/images/eskavator.png'
import nasos from './assets/images/nasos.png'
import pagruzchik from './assets/images/pagruzchik.png'
import avtovishka from './assets/images/avtovishka.png'
import manikulyator from './assets/images/manikulyator.png'
import buldozer from './assets/images/buldozer.png'
import yamobur from './assets/images/yamobur.jpg'
import pesok from './assets/images/pesok.png'
import kroshka from './assets/images/kroshka.png'
import sevhox from './assets/images/sevhox.png'
import sheben from './assets/images/sheben.png'


const initialState = {
  texnika : [
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
  ],
  shinanyut: [
    {
      id: 1,
      name: 'Катки',
      image: sheben,
      shortDescription: 'Brief description of Product 1.',
      description: 'Detailed description of Product 1.',
      price: '$100',
    },    {
      id: 2,
      name: 'Катки',
      image: pesok,
      shortDescription: 'Brief description of Product 1.',
      description: 'Detailed description of Product 1.',
      price: '$100',
    },    {
      id: 3,
      name: 'Катки',
      image: kroshka,
      shortDescription: 'Brief description of Product 1.',
      description: 'Detailed description of Product 1.',
      price: '$100',
    },    {
      id: 4,
      name: 'Катки',
      image: sevhox,
      shortDescription: 'Brief description of Product 1.',
      description: 'Detailed description of Product 1.',
      price: '$100',
    },
    

  ]
};

const productReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(productReducer);

export default store;
