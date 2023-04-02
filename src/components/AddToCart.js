// This is an AddToCart component. It displays a button that adds a product to the cart. It import the Button component from the MUI library.

import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Remove from '@mui/icons-material/Remove';
import IconButton from '@mui/material/IconButton';

export function AddToCart(props) {
    if (props.cart.filter((item) => item.id === props.product.id).length > 0) {
        return (
            <div className="flex flex-row items-center space-x-4">
                <IconButton
                    className='bg-black hover:bg-white hover:text-black hover:shadow text-white py-2 rounded-full'
                    onClick={() => props.removeFromCart(props.product)}
                >
                    <Remove />
                </IconButton>
                <p>{props.cart.filter((item) => item.id === props.product.id).length}</p>
                <IconButton
                    className='bg-black hover:bg-white hover:text-black hover:shadow text-white py-2 rounded-full'
                    onClick={() => props.addToCart(props.product)}
                >
                    <Add />
                </IconButton>
            </div>
        );
    }
    return (
        <Button
            startIcon={<Add />}
            variant="contained"
            className='bg-black max-w-fit hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full'
            onClick={() => props.addToCart(props.product)}
        >
            Add to cart
        </Button>
    );
}