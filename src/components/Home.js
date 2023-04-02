
import { Catalogue } from './Catalogue';
import { Link } from 'react-router-dom';

export function Home(props) {
    return (
        <div className="app">
          <div className="app-head">
            <h1>Lorem Ipsum Store</h1>
            <p>Welcome! There are {props.products.length} products in the catalogue</p>
            <Link className="mt-6" to="/cart">🛒 Cart</Link>
          </div>
          <Catalogue products={props.products} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cart={props.cart} />
        </div>
    );
  }