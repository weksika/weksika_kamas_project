import React from "react";
import Preloader from "../../common/preloader/preloader";
import userPhoto from '../../../assets/images/photo.jpg';
import s from './profileInfo.module.css';
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({profile, status, updateStatus, owner, savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.photo}  style = {{backgroundImage: `url(${profile.photos.large || userPhoto})`}}/>
                {owner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <div className={s.fullname}>
                    {profile.fullName}
                </div>
                <ProfileStatus aboutMe = {status} updateStatus = {updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;