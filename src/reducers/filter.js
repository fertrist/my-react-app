import { combineReducers } from 'redux'

const brandsReducer = (state = [], action) => {
	switch (action.type)
	{
	    case 'FILTER_BY_BRAND':
	      return [...state, action.singleBrand]
      	case 'UNFILTER_BY_BRAND':			
      	  return state.filter(brand => brand !== action.singleBrand)	
	    case 'FILTER_BY_BRANDS':
	      return action.brands
	    default:
	      return state	  	
	}
}

const typesReducer = (state = [], action) => {
	switch (action.type)
	{
	    case 'FILTER_BY_TYPE':
	      return [...state, action.singleType]  
	    case 'UNFILTER_BY_TYPE':			
      	  return state.filter(type => type !== action.singleType)  
	    case 'FILTER_BY_TYPES':
	      return action.types
	    default:
	      return state	  	
	}
}

const defaultPriceFilter = { min: 0, max: Number.MAX_SAFE_INTEGER}

const priceReducer = (state = defaultPriceFilter, action) => {
	switch (action.type){
		case 'FILTER_BY_PRICE':
			let newState = {...state}
			if (action.price.min) {
				newState = {...newState, min : action.price.min}
			}
			if (action.price.max) {
				newState = {...newState, max: action.price.max}
			}
			return newState
	  	default:
	    	return state;	
	}
}

const nameSegmentReducer = (state = '', action) => {
	switch (action.type){
		case 'FILTER_BY_NAME':
	  		return action.nameSegment  
	  	default:
	      return state;	
	}
}

const emptyFilter = {
	brands : [],
	types : [],
	nameSegment : '',
	price: defaultPriceFilter
}

const filterCompoundReducer = (state = emptyFilter, action) => {
	switch(action.type) {
		case 'DROP_FILTER':
			return {...emptyFilter, price: action.priceRange}
		default:
			return combineReducers({
				brands : brandsReducer,
				types : typesReducer,
				nameSegment : nameSegmentReducer,
				price : priceReducer
			})(state, action)
	}
}

export default filterCompoundReducer