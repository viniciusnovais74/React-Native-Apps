import axios from "axios";
import { ADD_POST } from "../actions/actionTypes";

const initialState = {
  posts: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:     
    return {
      ...state,
      posts: state.posts.concat({
        ...action.payload
      })
    }
    default:
      return state
  }
}
export default reducer