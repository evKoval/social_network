import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let posts = [
    { message: "My first post", likeCounter: 1 },
    { message: "My 2nd post", likeCounter: 2 },
    { message: "My 3rd post", likeCounter: 3 },
    { message: "My 4th post", likeCounter: 4 }
  ];

  let postElements = posts.map(post => (
    <Post message={post.message} likeCounter={post.likeCounter} />
  ));
  return (
    <div className={classes.postsBock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="newPost" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
          {postElements}
      </div>
    </div>
  );
};
export default MyPosts;
