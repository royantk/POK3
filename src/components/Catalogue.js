// This is a Catalogue component. It displays a list of products.

import { CatalogueItem } from './CatalogueItem';

export function Catalogue(props) {
    return (
        <div className="flex flex-col space-y-4">
            {props.products.map((product) => (
                <CatalogueItem product={product} addToCart={props.addToCart} key={product.id} removeFromCart={props.removeFromCart} cart={props.cart}/>
            ))}
        </div>
    );
}
