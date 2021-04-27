import { ActionTypes } from "../actionTypes"

const initialState = {
  products: [],
  carts: {},
}

export const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {...state, products: action.payload};
    default:
      return state;
  }
}

export const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CART:
      return {...state, carts: action.payload};
    default:
      return state;
  }
}