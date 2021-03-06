const toCartItem = (item, count) => {
  return {
    item,
    count,
    price: count * item.price
  }
}

const updateExistingItem = (cartItem, item, count) => {
  return {...cartItem, 
          count : cartItem.count + count, 
          price : cartItem.price + (item.price * count)}
}

const addItemsToCart = (state, item, count) => {
  var found = false

  state = state.map(cartItem => {  
    if (cartItem.item.id === item.id) {
      found = true
      return updateExistingItem(cartItem, item, count)  
    }
    return cartItem
  })
  
  return found ? state : [...state, toCartItem(item, count)]
}

const removeItemFromCart = (state, item, count) => {
  let newState = state.map(cartItem => {
    if (cartItem.item.id !== item.id) {
      return cartItem
    }

    return {
      ...cartItem,
      count : cartItem.count-count,
      price : cartItem.price-item.price
    }
  })

  return newState.filter(cartItem => cartItem.count > 0)
}

const removeAllItemsFromCart = (state, item) => {
  return state.filter(cartItem => cartItem.item.id !== item.id)
}

const cartItems = (state = [], action) => {
  switch (action.type){
    case 'ADD_ITEMS':
      return addItemsToCart(state, action.item, action.count)
    case 'REMOVE_ITEM':
      let newState = removeItemFromCart(state, action.item, 1)
      console.log('REMOVE_ITEM', newState)
      return newState
    case 'REMOVE_ALL_ITEMS':
      return removeAllItemsFromCart(state, action.item)
    case 'REMOVE_ALL':
      return []
    default:
      return state;
  }
}

export default cartItems
