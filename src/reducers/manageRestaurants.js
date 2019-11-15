const initialState = {
  restaurants: []
}

const manageRestaurants = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }
    
    default:
      return state

  }
}

export default manageRestaurants
