import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from './profileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.photo}></div>
                <div className={s.fullname}>
                    Имя Фамилия
                </div>
                <div className={s.status}>
                    <img src={props.profile.photos.small}/>
                    Статус
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;