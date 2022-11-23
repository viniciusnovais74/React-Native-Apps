import { ADD_COMMENT, ADD_POST } from "./actionTypes";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  }
}

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  }
}