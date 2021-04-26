import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img src="https://i.ibb.co/vkhfLRv/Group-86.png" alt="e commerce" height="50px" className={classes.image} /> 
          </Typography>
          <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton  aria-label="Show cart items" color="inherit">
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;