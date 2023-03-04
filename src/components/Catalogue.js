// This is a Catalogue component. It displays a list of products.

import { CatalogueItem } from './CatalogueItem';
import '../styles/Catalogue.css';

const addToCart = (product) => {
    console.log('Adding to cart:', product);
};

export function Catalogue(props) {
    return (
        <div className="catalogue">
            {props.products.map((product) => (
                <CatalogueItem product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}