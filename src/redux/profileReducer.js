import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_post = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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

    case SAVE_PHOTO_SUCCESS:
      debugger;
      return { ...state, profile: { ...state.profile, photos: action.photos } };
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
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = userID => async dispatch => {
  const response = await usersAPI.getProfile(userID);
  dispatch(setUserProfile(response.data));
};
export const getStatus = userID => async dispatch => {
  const response = await profileAPI.getStatus(userID);
  dispatch(setStatus(response.data));
};
export const updateStatus = status => async dispatch => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    // alert(error);
  }
};

export const savePhoto = file => async dispatch => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = profile => async (dispatch, getState) => {
  const userID = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userID));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));
    // dispatch(stopSubmit("editProfile", { contacts: { facebook: response.data.messages[0] } }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
