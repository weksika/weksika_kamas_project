import React from "react";
import style from './user.module.css';
import userPhoto from '../../assets/images/photo.jpg';
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow, currentPage, onPageChanged, totalUsersCount, pageSize }) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt="user_photo" className={style.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>

            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id);
                    }}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id);
                    }}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </span>
    </div>
}

export default User;