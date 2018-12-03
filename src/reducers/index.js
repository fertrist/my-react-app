import { combineReducers } from 'redux'
import cartItems from './cartItems'
import guitars from './guitars'

const manufacturers = (state = [], action) => {
  return state;
}

const types = (state = [], action) => {
  return state;
}

const guitarsReducer = (state = {}, action) => {
  switch (action.type){
    case 'REQUESTED_ITEMS':
      return {...state, loading: true}
    case 'RECEIVED_ITEMS':
      return {...state, loading: false, guitars : action.guitars}
    default:
      return state;
  }
}

export default combineReducers({
	items: cartItems,
	guitars : guitarsReducer,
	manufacturers : manufacturers,
	types : types
})