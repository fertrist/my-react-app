const guitars = (state = {}, action) => {
  switch (action.type){
    case 'REQUESTED_ITEMS':
      return {...state, loading: true}
    case 'RECEIVED_ITEMS':
      return {...state, loading: false, guitars : action.guitars}
    default:
      return state;
  }
}

export default guitars