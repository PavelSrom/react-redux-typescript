import { Dispatch } from "redux"
import { AppActions } from ".."

export const getProfile = () => async (dispatch: Dispatch<AppActions>) => {
  try {
    // const res = await axios.get('/api/me')
    dispatch({ type: "GET_PROFILE", payload: true })
  } catch (err) {
    dispatch({ type: "DELETE_PROFILE" })
  }
}
