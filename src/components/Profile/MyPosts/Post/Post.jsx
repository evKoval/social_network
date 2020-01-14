import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg"
        alt="avatar"
      />
      {props.message};
      <div>
        <span>like {props.likeCounter}</span>
      </div>
    </div>
  );
};
export default Post;
