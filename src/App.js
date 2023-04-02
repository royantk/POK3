// This is the home page of an ecommerce website. It displays a list of products.

import React from 'react';
import { useState } from 'react';
import { Product } from './components/Product';

import { Home } from './components/Home';
import { Cart } from './components/Cart';
import './styles/App.css';
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

  // Doit retirer une seule instance du produit du panier
  const removeFromCart = (product) => {
    productid = cart.indexOf(product);
    setCart(cart.filter((_, i) => i !== productid));
  };


  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
          <Route path="/product/:id" element={<Product  products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="/cart" element={<Cart products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
