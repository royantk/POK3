// This is an AddToCart component. It displays a button that adds a product to the cart. It import the Button component from the MUI library.

import { useState } from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import { css } from '@emotion/react';

export function AddToCart(props) {
    return (
        <Button
            startIcon={<Add />}
            variant="contained"
            className='bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full'
            onClick={() => props.addToCart(props.product)}
        >
            Add to cart
        </Button>
    );
}