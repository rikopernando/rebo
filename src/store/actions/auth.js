export const startLogin = () => (dispatch) => {
  dispatch({
    type: "LOGIN"
  })
}

export const startLogout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT"
  })
}
