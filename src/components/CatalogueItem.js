// This is a catalogue item component. It displays a single product with its image, name, price and a button to add it to the cart. It imports the AddToCart component. It also imports the MUI library to use the Card component.

import '../styles/CatalogueItem.css';
import Card from '@mui/material/Card';
import { AddToCart } from './AddToCart';

export function CatalogueItem(props) {
    return (
        <Card className="catalogue-item">
            <img src={props.product.image} alt={props.product.name} />
            <h3>{props.product.name}</h3>
            <p>{props.product.price} €</p>
            <AddToCart product={props.product} addToCart={props.addToCart} />
        </Card>
    );
}

/*
export function CatalogueItem(props) {
    return (
        <div className="catalogue-item">
            <img src={props.product.image} alt={props.product.name} />
            <h3>{props.product.name}</h3>
            <p>{props.product.price} €</p>
            <AddToCart product={props.product} addToCart={props.addToCart} />
        </div>
    );
}
*/
