// This is a catalogue item component. It displays a single product with its image, name, description, price and a button to add it to the cart. It imports the AddToCart component. It also imports the MUI library to use the Card component.

import { AddToCart } from './AddToCart';
import { Link } from 'react-router-dom';

export function CatalogueItem(props) {
    return (
        <div className="bg-white rounded-lg flex flex-row items-center space-x-16 pr-12">
            <Link to={"/product/" + props.product.id}>
                <img className="object-cover h-40 aspect-square" src={props.product.image} alt={props.product.name} />
            </Link>
            <h3 className="my-2 text-lg font-medium max-h-28 w-40 overflow-hidden">{props.product.name}</h3>
            <p className="break-words text-gray-500 max-h-28 w-60 overflow-hidden">{props.product.description}</p>
            <p className="break-words text-gray-500 max-h-28 w-28 overflow-hidden">{props.product.price} €</p>
            <AddToCart product={props.product} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cart={props.cart}/>
        </div>
    );
}
