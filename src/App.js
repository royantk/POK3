// This is the home page of an ecommerce website. It displays a list of products.

import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { Product } from './components/Product';

import { Catalogue } from './components/Catalogue';
import { Home } from './components/Home';
import './styles/App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { faker } from '@faker-js/faker';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const products = [];

for (let i = 1; i <= 5; i++) {
  const name = faker.commerce.productName();
  const product = {
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: "https://picsum.photos/200?random=" + i,
    description: faker.commerce.productDescription(),
  };
  products.push(product);
}

export function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home products={products} addToCart={addToCart}/>}/>
          <Route path="/product/:id" element={<Product  products={products} addToCart={addToCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}
