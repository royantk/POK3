// This is a Catalogue component. It displays a list of products.

import { CatalogueItem } from './CatalogueItem';

const addToCart = (product) => {
    console.log('Adding to cart:', product);
};

export function Catalogue(props) {
    return (
        <div className="flex flex-col space-y-4">
            {props.products.map((product) => (
                <CatalogueItem product={product} addToCart={addToCart} key={product.id} />
            ))}
        </div>
    );
}
