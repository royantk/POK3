// This is the Cart page. It displays the list of products in the cart. It imports the CartItem component. Warning: the cart shall display only one instance of each product, even if the same product has been added multiple times to the cart.

import { CatalogueItem } from './CatalogueItem';
import { Link } from 'react-router-dom';

export function Cart(props) {
    const uniqueProducts = Array.from(new Set(props.cart));
    return (
        <div className="app">
            <div className="app-head">
                <h1>Cart</h1>
                <p>You currently have {props.cart.length} items in your cart</p>
                <Link className="mt-6" to="/">⬅️ Back to catalogue</Link>
            </div>
            <div className="flex flex-col space-y-4">
                {uniqueProducts.map((product) => (
                    <CatalogueItem product={product} addToCart={props.addToCart} removeFromCart={props.removeFromCart} cart={props.cart} key={product.id}/>
                ))}
            </div>
            
        </div>
    );
}