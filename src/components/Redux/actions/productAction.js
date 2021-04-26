import { ActionTypes } from '../actionTypes'

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product
  }
}