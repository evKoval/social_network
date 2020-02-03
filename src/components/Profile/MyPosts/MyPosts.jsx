import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = props => {
    let postElements = props.posts.map(post => (
        <Post message={post.message} likeCounter={post.likeCounter}/>
    ));

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    let NewPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'textarea'} name={'newPostText'}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>
        )
    }

    NewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm);

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={addPost}/>
            <div className={classes.posts}>{postElements}</div>
        </div>
    );
};
export default MyPosts;
