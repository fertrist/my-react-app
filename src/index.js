import './index.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import React from 'react';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import data from './data/guitars.json'

const store = createStore(rootReducer, {
	...data,
	items: []
})

const app = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

render(app(), document.getElementById('root'));