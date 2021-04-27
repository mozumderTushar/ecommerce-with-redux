import { combineReducers } from 'redux';
import { productReducer, cartReducer } from './productReducer'

const reducers = combineReducers({
  allProducts: productReducer,
  cartItems: cartReducer
})

export default reducers;