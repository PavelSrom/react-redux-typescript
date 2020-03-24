import { Dispatch } from "redux"
import { AppActions } from ".."

// should be Dispatch<AppActions> instead so that you can use not only auth actions
export const loginUser = () => async (dispatch: Dispatch<AppActions>) => {
  try {
    // API request

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { token: "authentication_token" }
    })
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: { message: err.message }
    })
  }
}

export const registerUser = () => async (dispatch: Dispatch<AppActions>) => {
  try {
    // request here
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: { message: err.message }
    })
  }
}
