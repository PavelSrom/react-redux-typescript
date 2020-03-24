import { createStore, applyMiddleware, combineReducers, Store } from "redux"
import thunk from "redux-thunk"
import auth from "./reducers/auth"
import profile from "./reducers/profile"
import { AuthActionTypes } from "./types/auth"
import { ProfileActionTypes } from "./types/profile"

const rootReducer = combineReducers({
  auth,
  profile
})

export type AppState = ReturnType<typeof rootReducer> // used for mapStateToProps
// AuthActionTypes | UserActionTypes | ProfileActionTypes etc.
// so that you can use any actionTypes inside your 'dispatch' with thunk
export type AppActions = AuthActionTypes | ProfileActionTypes
export const store: Store = createStore(rootReducer, applyMiddleware(thunk))
