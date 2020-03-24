export const GET_PROFILE = "GET_PROFILE"
export const DELETE_PROFILE = "DELETE_PROFILE"

interface GetProfileAction {
  type: typeof GET_PROFILE
  payload: boolean
}

interface DeleteProfileAction {
  type: typeof DELETE_PROFILE
}

export type ProfileActionTypes = GetProfileAction | DeleteProfileAction
