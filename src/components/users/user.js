import React from "react";
import axios from 'axios';
import style from './user.module.css';
import userPhoto from '../../assets/images/photo.jpg'
class Users extends React.Component{ 
    componentDidMount(){
        if(this.props.users.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            });
        }
    }
    
    render(){

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i<= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p=> {
                    return <span className= {this.props.currentPage === p && style.selectedPage }
                    onClick={() => {this.props.setCurrentPage(p)}}>{p}</span>
                })}
            </div>
        { 
        this.props.users.map(u => <div key = {u.id}>
            <span>
                <div>
                    <img className={style.userPhoto} src={ u.photos.small != null ? u.photos.small: userPhoto}/>
                </div>
                <div>
                    {u.followed 
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)

        }
    </div>
    }
}


export default Users;