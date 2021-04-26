import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = () => {
  const classes = useStyles();
  const product = useSelector((state) => state.allProducts)
  console.log(product);
  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {
          product.map(pd => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card className={classes.root}>
                <CardMedia className={classes.media} image="" title={pd.name} />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {pd.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      ${pd.price}
                    </Typography>
                  </div>
                  <Typography variant="h2" color="textSecondary" component="p">{pd.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton aria-label="Add to Cart" >
                    <AddShoppingCart />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default Product;