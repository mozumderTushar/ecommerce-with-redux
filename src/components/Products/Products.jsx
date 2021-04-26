import React from 'react';
import Product from './Product/Product';
import useStyles from './styles';

const Products = () => {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Product />
      </main>
    </div>
  );
};

export default Products;