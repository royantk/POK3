// This is the home page of an ecommerce website. It displays a list of products.

import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import './styles/App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
    image: 'https://picsum.photos/200/300',
  },
];

// Cart handling with useState


export function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <h1>Products</h1>
      <Catalogue products={products} addToCart={addToCart} />
    </div>
  );
}
