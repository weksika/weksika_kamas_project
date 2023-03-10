import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from './profileInfo.module.css';
import ProfileStatus from "./profileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.photo}  style = {{backgroundImage: `url(${props.profile.photos.small})`}}>
                </div>
                <div className={s.fullname}>
                    {props.profile.fullName}
                </div>
                <ProfileStatus aboutMe = {props.profile.aboutMe}/>
            </div>

        </div>
    )
}

export default ProfileInfo;