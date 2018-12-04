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

export const filterByBrands = (brands) => ({
  type: 'FILTER_BY_BRANDS',
  brands
})

export const filterByTypes = (types) => ({
  type: 'FILTER_BY_TYPES',
  types
})

export const filterByPrices = (price) => ({
  type: 'FILTER_BY_PRICE',
  price
})

export const filterByName = (nameSegment) => ({
  type: 'FILTER_BY_NAME',
  nameSegment
})

export const dropFilter = () => ({
  type: 'DROP_FILTER'
})

// TODO simulate api requests

// export const requestedItems = () => ({
//   type: 'REQUESTED_ITEMS',
// })

// export const receivedItems = (guitars) => ({
//   type: 'RECEIVED_ITEMS',
//   guitars
// })
