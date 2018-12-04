const filterReducer = (state = {}, action) => {
  switch (action.type){
    case 'FILTER_BY_BRANDS':
      return {...state, brands : action.brands}
    case 'FILTER_BY_TYPES':
      return {...state, types : action.types}
    case 'FILTER_BY_PRICE':
      return {...state, price: action.price}  
  	case 'FILTER_BY_NAME':
	  return {...state, nameSegment: action.nameSegment}  
    case 'DROP_FILTER':
      return {}    
    default:
      return state;
  }
}

export default filterReducer