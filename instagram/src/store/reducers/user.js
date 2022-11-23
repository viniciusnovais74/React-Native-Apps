import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";

const initialState = {
  name: null,
  email: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      console.warn("=========",action.payload)
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    case USER_LOGGED_OUT:
      return {
        ...state,
        name: null,
        email: null
      }
    default:
      return state;
  }
}