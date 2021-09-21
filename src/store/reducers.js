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

const initialStateUsers = {
  loading: false,
  users: [],
  error: "",
};

const initialStatePosts = {
  loading: false,
  posts: [],
  error: "",
};

const initialStatePost = {
  loading: false,
  post: [],
  error: "",
};

export const userReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialStateUsers;
  }
};

export const postsReducer = (state = initialStatePosts, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialStatePosts;
  }
};

export const postReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return initialStatePost;
  }
};
