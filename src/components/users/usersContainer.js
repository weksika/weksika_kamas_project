import React from "react";
import Users from "./users";
import Preloader from "../common/preloader/preloader";

import { connect } from "react-redux";
import { follow } from "../../redux/users-reducer";
import { unfollow } from "../../redux/users-reducer";
import { setCurrentPage} from "../../redux/users-reducer";
import { setfollowingInProgress } from "../../redux/users-reducer";
import { getUsers } from "../../redux/users-reducer";
import { compose } from "redux";

class UsersComponent extends React.Component{ 
    componentDidMount(){
        this.props.getUsers( this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    
    render(){

        return <>
                {this.props.isFetching ? 
                <Preloader/> : null}
                
                    
                <Users 
                totalUsersCount = {this.props.totalUsersCount} 
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                followingInProgress = {this.props.followingInProgress}
                /> 
                </>
        
        
    }
   
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
//  let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }

//     }
//  }
export default compose(
    connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, setfollowingInProgress, getUsers}))(UsersComponent)