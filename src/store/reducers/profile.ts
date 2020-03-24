import { ProfileActionTypes } from "../types/profile"

interface RootState {
  profile: null | boolean
}

const initialState: RootState = {
  profile: null
}

export default (
  state = initialState,
  action: ProfileActionTypes
): RootState => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        profile: true
      }
    case "DELETE_PROFILE":
      return {
        ...state,
        profile: null
      }
    default:
      return state
  }
}
