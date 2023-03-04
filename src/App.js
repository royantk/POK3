// This is the home page of an ecommerce website. It displays a list of products.

import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Catalogue } from './components/Catalogue';
import './styles/App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { faker } from '@faker-js/faker';

const products = [];

for (let i = 1; i <= 5; i++) {
  const name = faker.commerce.productName();
  const product = {
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: "https://picsum.photos/200?random="+i,
    description: faker.commerce.productDescription(),
  };
  products.push(product);
}

// Cart handling with useState


export function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <StyledEngineProvider injectFirst>
      <div className="app">
        <div className="app-head">
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum Dolor Sit Amet</p>
        </div>
        <Catalogue products={products} addToCart={addToCart} />
      </div>
    </StyledEngineProvider>

  );
}
