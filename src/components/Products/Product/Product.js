import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { setProduct } from '../../Redux/actions/productAction'

import useStyles from './styles';
import axios from 'axios';
import { commerce } from '../../lib/commerce';

const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const allProduct = useSelector((state) => state.allProducts.products)
  
  console.log("allProduct",allProduct);

  const fetchProductDetails = async () => {
    const result = await commerce.products.list();
      console.log("result",result.data);
    dispatch(setProduct(result.data))
  }

  useEffect(() => {
    fetchProductDetails();
  }, [])

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        {
          allProduct?.map(pd => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pd.id}>
            <Card className={classes.root}>
              <CardMedia className={classes.media} image={pd.media.source} title={pd.name} />
              <CardContent>
                <div className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {pd.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${pd.price.formatted}
                  </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: pd.description }} variant="body2" color="textSecondary" component="p" />
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