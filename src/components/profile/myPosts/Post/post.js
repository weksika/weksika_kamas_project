import React from "react";
import c from './post.module.css';

const Post = (props) => {
  return(
        <div className={c.item}>
          <div className={c.photo}></div>
                <div className={c.fullname}>
                    Имя Фамилия
                </div>
            <div className={c.postContent}>
              {props.post}
            </div>
        </div>
  )}

  export default Post;