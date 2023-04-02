
import { useParams } from "react-router";
import { CatalogueItem } from './CatalogueItem';
import { Link } from 'react-router-dom';
import { AddToCart } from "./AddToCart";

export function Product(props) {
  let { id } = useParams();

  if (id > props.products.length) {
    return (
      <div className='app'>
        <div className="app-head">
          <h1>Product {id} not found</h1>
          <Link className="mt-6" to="/">⬅️ Back to catalogue</Link>
          <Link to="/cart">🛒 Cart</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className="app-head">
        <h1>{props.products[id - 1].name}</h1>
        <Link className="mt-6" to="/">⬅️ Back to catalogue</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
      <div className="bg-white rounded-lg flex flex-row items-center space-x-16 pr-12">
        <Link to={"/product/" + props.products[id - 1].id}>
          <img className="object-cover h-96 aspect-square" src={props.products[id - 1].image} alt={props.products[id - 1].name} />
        </Link>
        <div className="bg-white rounded-lg flex flex-col items-left space-y-4 pr-12">
          <h2 className="text-2xl font-bold max-h-28 w-96 overflow-hidden">{props.products[id - 1].name}</h2>
          <h3 className="text-lg break-words text-gray-500 max-h-28 w-96 overflow-hidden">{props.products[id - 1].price} €</h3>
          <p className="pb-6 break-words text-gray-500 max-h-28 w-96 overflow-hidden">{props.products[id - 1].description}</p>
          <AddToCart className="" product={props.products[id - 1]} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cart={props.cart} />
        </div>

      </div>
    </div>
  );
}

