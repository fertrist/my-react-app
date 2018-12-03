export const addItemsToCart = (item, count) => ({
  type: 'ADD_ITEMS',
  item,
  count,
})

export const removeItemFromCart = item => ({
  type: 'REMOVE_ITEM',
  item,
})

export const removeItemsFromCart = item => ({
  type: 'REMOVE_ALL_ITEMS',
  item,
})

export const removeAllItems = () => ({
  type: 'REMOVE_ALL',
})

export const requestedItems = () => ({
  type: 'REQUESTED_ITEMS',
})

export const receivedItems = (guitars) => ({
  type: 'RECEIVED_ITEMS',
  guitars
})
