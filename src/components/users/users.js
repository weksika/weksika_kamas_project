import React from "react";
import Paginator from "./paginator";
import User from "./user";

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, followingInProgress }) => {
    return <div>
        {
            users.map(u => <User user={u}
                key={u.id}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
            />)
        }
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
    </div>
}

export default Users;