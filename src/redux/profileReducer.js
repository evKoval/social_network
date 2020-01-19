const ADD_post = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_post:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCounter: Math.floor(Math.random() * 100)
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_post });

export const updatePostTextActionCreator = text => ({
  type: UPDATE_POST_TEXT,
  newText: text
});

export default profileReducer;
