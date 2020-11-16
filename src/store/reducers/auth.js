const initialState = {
  isAuthenticated: false
}

export default (state = initialState, action) => {
  const {type} = action
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true
      }
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
