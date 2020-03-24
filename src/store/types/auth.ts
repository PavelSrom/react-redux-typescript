export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

interface LoginSuccessAction {
  // for thunk dispatches
  type: typeof LOGIN_SUCCESS
  payload: {
    token: string
  }
}

// this interface can be generic for all request errors
interface LoginFailAction {
  // for thunk dispatches
  type: typeof LOGIN_FAIL
  payload: {
    message: string
  }
}

export type AuthActionTypes = LoginSuccessAction | LoginFailAction
