import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { Textarea } from "../../common/preloader/formsControls/formsControls";
import c from './myPosts.module.css';
import Post from "./Post/post";

const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = React.memo(props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={c.newPost}>
        <Field component={Textarea} name={"newPostText"} validate = {[requiredField, maxLength10]} placeholder = 'post message'/>
        <button className={c.addPost}>Add post</button>
      </div>
    </form>
  )
});
AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props  => {
  let postElements =
    props.posts.map(p => <Post post={p.post} key={p.id} likesCount={p.likesCount} />);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  console.log('fjfjfj');
  return (
    <div className={c.content}>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  )
});
export default MyPosts;