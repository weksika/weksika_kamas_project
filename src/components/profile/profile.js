import React from "react";
import MyPostsContainer from "./myPosts/myPostsContainer";
import ProfileInfo from "./profileInfo/profileInfo";

const Profile = () => {

  return(
    <div>
      <ProfileInfo/>
        <MyPostsContainer />
      </div>
  )
}
export default Profile;