import { combineReducers } from 'redux'
import cart from './cartItems'
import filterReducer from './filter'

const brands = (state = [], action) => {
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

const priceRangeReducer = (state = {}, action) => {
	return state;
}

export default combineReducers({
	guitars : guitarsReducer,
	brands : brands,
	types : types,
	priceRange : priceRangeReducer,
	cart: cart,
	filter : filterReducer
})