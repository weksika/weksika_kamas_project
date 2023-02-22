import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";
import {connect} from "react-redux"

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
      updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
    addPost: () => {
    dispatch(addPostActionCreator());
  }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;