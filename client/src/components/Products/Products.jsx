import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

// Our products on main page
const products = [
    { id: 1, name: 'Home', description: 'Enter description here', price: '$15', image: 'https://cdn.shopify.com/s/files/1/0519/8643/2149/products/bubble-ball-glass-vase-ohoj-design-1.jpg?v=1639473667'},
    { id: 2, name: 'Electronics', description: 'Enter description here', price: '$300', image: 'https://static.gopro.com/assets/blta2b8522e5372af40/blt59296e7f768b032f/620393473d56844907a2b561/pdp-h10-presidents-promo-contingency-bundle-gallery-1.png?width=1920&quality=80&auto=webp&disable=upscale' },
];

const Products = () => {    
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs ={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );    
}

export default Products;