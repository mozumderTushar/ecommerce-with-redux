import { ActionTypes } from "../actionTypes"

const initialState = [
  {name: 'tushar',topic: 'redux'},
  {name: 'pc',topic: 'react'},
]

export const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return state;
    default:
      return state;
  }
}