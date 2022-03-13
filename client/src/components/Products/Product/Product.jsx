import React from 'react';
// imports info/description of product
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
// imports styles
import useStyle from './styles';

const Product = ({ product }) => {
    const classes = useStyle();

  return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" >
                    {product.price}
                </Typography>
            </div>
            <Typography variant="h2" color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart">
                <AddShoppingCart />    
            </IconButton>    
        </CardActions>
    </Card>
    
  )
}

export default Product