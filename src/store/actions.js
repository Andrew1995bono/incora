import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./constants";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./constants";

import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "./constants";

export const requestUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_USERS_REQUEST,
    });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error,
      });
    }
  };
};

export const requestPosts = (rowId) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_POSTS_REQUEST,
    });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${rowId}`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POSTS_FAILURE,
        payload: error,
      });
    }
  };
};

export const requestPost = (rowId) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_POST_REQUEST,
    });
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${rowId}`
      );
      const data = await response.json();
      dispatch({
        type: FETCH_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POST_FAILURE,
        payload: error,
      });
    }
  };
};
