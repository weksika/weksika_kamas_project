import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from './profileInfo.module.css';
import ProfileStatus from "./profileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.photo}  style = {{backgroundImage: `url(${profile.photos.small})`}}>
                </div>
                <div className={s.fullname}>
                    {profile.fullName}
                </div>
                <ProfileStatus aboutMe = {status} updateStatus = {updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;