import { ActionTypes } from '../actionTypes'

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product
  }
}

export const setCart = (cartItem) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cartItem
  }
}