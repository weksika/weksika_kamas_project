import React from "react";
import c from './myPosts.module.css';
import Post from "./Post/post";

const MyPosts = (props) => {

    let postElements = 
        props.posts.map(p => <Post post={p.post} key = {p.id} likesCount ={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }
    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

  return(
    <div className={c.content}>
        <div className={c.newPost}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
          <button className={c.addPost} onClick={onAddPost}>Add post</button>          
        </div>
        <div className={c.posts}>
            {postElements}
        </div>
      </div>
  )
}
export default MyPosts;