import { profileAPI, usersAPI } from "../api/api";

const ADD_post = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "My first post", likeCounter: 1 },
    { id: 2, message: "My 2nd post", likeCounter: 2 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_post:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCounter: Math.floor(Math.random() * 100)
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postID)
      };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({
  type: ADD_post,
  newPostText
});

export const deletePost = postID => ({
  type: DELETE_POST,
  postID
});

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userID => async dispatch => {
  const response = await usersAPI.getProfile(userID);
  dispatch(setUserProfile(response.data));
};
export const getStatus = userID => async dispatch => {
  const response = await profileAPI.getStatus(userID);
  dispatch(setStatus(response.data));
};
export const updateStatus = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
