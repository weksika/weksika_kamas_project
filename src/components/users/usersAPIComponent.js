import React from "react";
import axios from 'axios';
import Users from "./users";
import Preloader from "../common/preloader/preloader";

class UsersAPIComponent extends React.Component{ 
    componentDidMount(){
        this.props.setIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount); 
            });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            });
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
                unfollow = {this.props.unfollow}/> 
                </>
        
        
    }
   
}


export default UsersAPIComponent;