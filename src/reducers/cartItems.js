const toCartItem = (item, count) => {
  return {
    item,
    count,
    price: count * item.price
  }
}

const addItemsToCart = (state, item, count) => {
  const found = false
  
  state = state.map(cartItem => {
    if (cartItem.id === item.id) {
      const increasedCount = cartItem.count + count
      
      return {
              ...cartItem, 
              count : increasedCount, 
              price : cartItem.price * increasedCount
            }
    
    }
    return cartItem
  })

  if (!found) {
    return [...state, toCartItem(item, count)]
  }
  return state;
}

const removeItemFromCart = (state, item, count) => {
  state = state.map(cartItem => {
    if (cartItem.id !== item.id) {
      return cartItem
    }

    return {
      ...cartItem,
      count : cartItem.count--,
      price : cartItem.price-item.price
    }
  })

  return state.filter(cartItem => cartItem.count > 0)
}

const removeAllItemsFromCart = (state, item) => {
  return state.filter(cartItem => cartItem.item.id !== item.id)
}

const cartItems = (state = [], action) => {
  switch (action.type){
    case 'ADD_ITEMS':
      return addItemsToCart(state, action.item, action.count)
    case 'REMOVE_ITEM':
      return removeItemFromCart(state, action.item, 1)
    case 'REMOVE_ALL_ITEMS':
      return removeAllItemsFromCart(state, action.item)
    case 'REMOVE_ALL':
      return []
    default:
      return state;
  }
}

export default cartItems
