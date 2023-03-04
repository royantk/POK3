// This is an AddToCart component. It displays a button that adds a product to the cart. It import the Button component from the MUI library.

import '../styles/AddToCart.css';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

export function AddToCart(props) {
    return (
        <Button
            startIcon={<Add />}
            variant="contained"
            onClick={() => props.addToCart(props.product)}
        >
            Add to cart
        </Button>
    );
}