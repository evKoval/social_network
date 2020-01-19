import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = props => {
  let postElements = props.posts.map(post => (
    <Post message={post.message} likeCounter={post.likeCounter} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postElements}</div>
    </div>
  );
};
export default MyPosts;
