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

export default combineReducers({
	items: cartItems,
	guitars : guitarsReducer,
	brands : brands,
	types : types,
	filter : filterReducer
})