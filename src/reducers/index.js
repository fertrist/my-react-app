import { combineReducers } from 'redux'
import cartItems from './cartItems'
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

const findPriceRange = (guitars) => {
  var priceRange = { min: Number.MAX_SAFE_INTEGER, max: 0}
  
  guitars.forEach(guitar => {
    if (guitar.price < priceRange.min) {
      priceRange.min = guitar.price
    }
    if (guitar.price > priceRange.max) {
      priceRange.max = guitar.price
    }
  })
  
  return priceRange
}

const priceRangeReducer = (state = {}, action) => {
	return state;
}

export default combineReducers({
	guitars : guitarsReducer,
	brands : brands,
	types : types,
	priceRange : priceRangeReducer,
	items: cartItems,
	filter : filterReducer
})