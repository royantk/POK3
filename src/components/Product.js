import React from 'react';
import { useParams } from "react-router";
import { CatalogueItem } from './CatalogueItem';
import { Link } from 'react-router-dom';

export function Product(props) {
  let { id } = useParams();

  if (id > props.products.length) {
    return (
      <div>
        <h1>Product {id} not found</h1>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className="app-head">
        <h1>{props.products[id - 1].name}</h1>
        <p>{props.products[id - 1].description}</p>
      </div>
      <CatalogueItem product={props.products[id - 1]} addToCart={props.addToCart} />
      <Link className="app-head" to="/">⬅️ Back to catalogue</Link>
    </div>
  );
}
