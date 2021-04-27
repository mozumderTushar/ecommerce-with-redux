import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { setProduct, setCart } from '../../Redux/actions/productAction'
import useStyles from './styles';
import { commerce } from '../../lib/commerce';
import NavBar from '../../NavBar/NavBar';

const Product = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const allProduct = useSelector((state) => state.allProducts.products)
  const cartItem = useSelector((state) => state.cartItems.carts)

  const fetchProductDetails = async () => {
    const result = await commerce.products.list();
    dispatch(setProduct(result.data))
  }

  const fetchCartDetails = async () => {
    const result = await commerce.cart.retrieve();
    dispatch(setCart(result))
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    dispatch(setCart(item))
  }

  useEffect(() => {
    fetchProductDetails();
    fetchCartDetails();
  }, [])

  return (
    <div>
      <NavBar items={cartItem}/>
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
                  <IconButton aria-label="Add to Cart" onClick={() => handleAddToCart(pd.id, 1)}>
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