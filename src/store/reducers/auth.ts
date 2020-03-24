import { AuthActionTypes } from "../types/auth"

interface RootState {
  isAuthenticated: boolean | null
  user: null | {
    name: string
    email: string
  }
}

const initialState: RootState = {
  isAuthenticated: null,
  user: null
}

// with all of this, the reducer is strongly typed
export default (state = initialState, action: AuthActionTypes): RootState => {
  switch (action.type) {
    case "LOGIN_SUCCESS": // autocompletion
      localStorage.setItem("token", action.payload.token)
      return {
        ...state,
        isAuthenticated: true
      }
    case "LOGIN_FAIL":
      localStorage.removeItem("token")
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state
  }
}
