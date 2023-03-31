import React from "react";
import MyPostsContainer from "./myPosts/myPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = (props) => {
  return(
    <div>
      <ProfileInfo owner = {props.isOwner} profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} savePhoto = {props.savePhoto}/>
        <MyPostsContainer />
      </div>
  )
}
export default Profile;