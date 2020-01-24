const ADD_post = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "My first post", likeCounter: 1 },
    { id: 2, message: "My 2nd post", likeCounter: 2 }
  ],
  newPostText: "FLUX ME!!!",
  profile: null
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

export default profileReducer;
