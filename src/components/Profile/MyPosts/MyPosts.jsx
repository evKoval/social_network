import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLengthCreator(30);

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} placeholder={"type post text here"} component={Textarea}
                       name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

NewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm);

const MyPosts = React.memo(props => {


    let postElements = props.posts.map(post => (
        <Post message={post.message} likeCounter={post.likeCounter}/>
    ));

    let addPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={addPost}/>
            <div className={classes.posts}>{postElements}</div>
        </div>
    );
});
export default MyPosts;
