import {
  addPostActionCreator,
  updatePostTextActionCreator
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updatePostText: text => {
      debugger
      dispatch(updatePostTextActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
