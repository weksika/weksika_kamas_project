import React from "react";
import s from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.photo}></div>
                <div className={s.fullname}>
                    Имя Фамилия
                </div>
                <div className={s.status}>
                    Статус
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;