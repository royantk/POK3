import React from 'react';
import { Catalogue } from './Catalogue';

export function Home(props) {
    return (
        <div className="app">
          <div className="app-head">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum Dolor Sit Amet</p>
          </div>
          <Catalogue products={props.products} addToCart={props.addToCart} />
        </div>
    );
  }