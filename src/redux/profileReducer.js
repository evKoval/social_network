import { profileAPI, usersAPI } from "../api/api";

const ADD_post = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "My first post", likeCounter: 1 },
    { id: 2, message: "My 2nd post", likeCounter: 2 }
  ],
  newPostText: "FLUX ME!!!",
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_post:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCounter: Math.floor(Math.random() * 100)
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };

    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_post });
export const updatePostTextActionCreator = text => ({
  type: UPDATE_POST_TEXT,
  newText: text
});
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userID => dispatch =>
  usersAPI.getProfile(userID).then(response => {
    dispatch(setUserProfile(response.data));
  });
export const getStatus = userID => dispatch =>
  profileAPI.getStatus(userID).then(response => {
    dispatch(setStatus(response.data));
  });
export const updateStatus = status => dispatch =>
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });

export default profileReducer;
