import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { commerce } from '../lib/commerce';
import { setCart } from '../Redux/actions/productAction';


const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const cartProduct = useSelector((state) => state.cartItems)
  console.log("cartProduct", cartProduct);

  const fetchCartDetails = async () => {
    const result = await commerce.cart.retrieve();
    dispatch(setCart(result))
  }

  useEffect(() => {
    fetchCartDetails();
  }, [])

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart</Typography>
  );

  if (!cartProduct.carts.line_items) return 'Loading';



  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cartProduct.carts.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            {lineItem.name}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cartProduct.carts.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty cart</Button>
          <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cartProduct.carts.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;