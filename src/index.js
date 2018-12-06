import './index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import data from './data/guitars.json'
import { filterByPrices } from './actions'

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

const getInitialState = (data) => {
	return {...data, priceRange: findPriceRange(data.guitars)};
}

const store = createStore(rootReducer, getInitialState(data))

const app = () => {
	store.dispatch(filterByPrices(store.getState().priceRange))
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

render(app(), document.getElementById('root'));